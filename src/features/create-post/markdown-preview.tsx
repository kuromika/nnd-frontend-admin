import { useEffect, useState } from "react";
import { markdownToHtml } from "./services/parse-markdown";

export const MarkdownPreview = (props: { markdown: string }) => {
  const [html, setHTML] = useState<string | TrustedHTML>("");

  useEffect(() => {
    const processMarkdown = async () => {
      const result = await markdownToHtml(props.markdown);
      setHTML(result);
    };

    processMarkdown();
  }, [props.markdown]);

  return (
    <div className="ml-auto mr-auto mt-5 border-[#4465A1] w-[80%]">
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};
