import getAllComments from "../../library/getAllComments";
import getAllcomments from "../../library/getAllComments";
import Link from "next/link";
import { Calendar } from "../../components/ui/calendar";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import girl from "../../public/images/girl.png";
import sub from "../../public/images/Sub-img.jpg";

export default async function CommentsPage() {
  const commentsData = getAllComments();
  const comments = await commentsData;

  return (
    <main>
      <h2>
        <Link href="/" className="col-span-2">
          Back to Home
        </Link>
      </h2>
      <br />
      <div className="grid grid-cols-2 gap-8">
        {comments.map((comment) => (
          <Card key={comment.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <img src={girl} alt="girl icon"/>
                <AvatarFallback>{comment.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{comment.name}</CardTitle>
                <CardDescription>{comment.email}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>Comment: {comment.body}</CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="secondary">
                <Link href={`/comments/${comment.id}`}>View Comment<Badge variant="secondary">View</Badge></Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
