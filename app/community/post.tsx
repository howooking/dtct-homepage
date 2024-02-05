import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { getPostContents, getPostMetadata } from "@/lib/utils";
import profile from "@/public/main-logo.png";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";

export default function Post({
  slug,
  filePath,
  route,
}: {
  slug: string;
  filePath: string;
  route: string;
}) {
  const contents = getPostContents(slug, filePath);
  const metadata = getPostMetadata(slug, filePath);
  return (
    <div className="pt-10 pb-12">
      <Container>
        <h2 className="font-bold text-xl text-center w-full flex justify-center pb-4">
          {metadata.title}
        </h2>
        <div className="border-t pt-2 px-4">
          <div className="flex items justify-between items-center relative">
            <div className="flex items-center gap-2">
              <Image alt="profile" src={profile} unoptimized width={40} />
              <p>{metadata.author}</p>
            </div>

            <div className="flex items-center gap-4 z-10">
              <p>{metadata.date}</p>
              <Link href={`/community/${route}`}>
                <Button size="icon" variant="outline">
                  <HamburgerMenuIcon />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <article className="prose max-w-7xl">
          <Markdown>{contents.content}</Markdown>
        </article>
      </Container>
    </div>
  );
}
