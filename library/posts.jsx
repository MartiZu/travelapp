import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
  //get file names under /posts
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames.map((fileName) => {
    //remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    //read markdown file as string
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    //include all properties from the matterResult.data object into the blogPost object.
    //explicitly adds a date property to the blogPost object and sets its value
    const blogPost = {
      id,
      ...matterResult.data.title,
      date: matterResult.data.date,
    };

    //combine the data with the id
    return blogPost;
  });
}
