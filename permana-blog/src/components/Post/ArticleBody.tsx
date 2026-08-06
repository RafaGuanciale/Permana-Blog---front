import ReactMarkdown from "react-markdown";

interface articleBodyProps {
  text: string;
}

function ArticleBody({ text }: articleBodyProps) {
  return (
    <div className="article__body">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default ArticleBody;
