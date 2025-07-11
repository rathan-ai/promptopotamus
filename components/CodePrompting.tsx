import React from 'react';

export default function CodePrompting() {
  const contentHtml = `<p className="text-gray-700 dark:text-gray-300 mb-4">LLMs can write, explain, translate, and debug code. Be specific in your requests.</p><article className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow"><h4 className="font-medium mb-2">Example: Writing a Bash Script</h4><pre className="bg-white dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm"><code>Write a code snippet in Bash, which asks for a folder name. Then it takes the contents of the folder and renames all the files inside by prepending the name 'draft' to the file name.</code></pre></article>`;
  return (
    <section id="code-prompting" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">Code Prompting</h2>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml.replace(/\\n/g, '<br />') }} />
    </section>
  );
}