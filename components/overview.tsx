import { motion } from "framer-motion";
import Link from "next/link";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p>
          Chatbot powered by{" "}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://nextjs.org/"
            target="_blank"
          >
            Next.js{" "}
          </Link>
          ,{" "}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://sdk.vercel.ai/docs"
            target="_blank"
          >
            AI SDK{" "}
          </Link>
          ,{" "}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://github.com/nextauthjs/next-auth"
            target="_blank"
          >
            NextAuth.js
          </Link>{" "}
          by{" "}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://github.com/mainstar123"
            target="_blank"
          >
            JCode
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
