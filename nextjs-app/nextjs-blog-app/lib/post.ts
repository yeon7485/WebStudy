import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'node_modules/remark-html/lib';

// 폴더 경로
const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // /posts 폴더에 있는 파일 이름을 잡아주기
  // ['pre-rendering.md', 'ssg-ssr.md']
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // 파일 명에 있는 확장자 (.md) 없애기
    const id = fileName.replace(/\.md$/, '');
    // 폴더 경로와 파일 경로 합치기
    const fullPath = path.join(postsDirectory, fileName);
    // 파일 안에 있는 내용 잡아주기
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // 데이터로 변경
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  // 최근에 생성된 post를 위로 정렬
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// id 목록 가져오기
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// post data 가져오기
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  console.log('fullpath:', fullPath);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContents);

  // md 파일을 html string으로 만들기
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
