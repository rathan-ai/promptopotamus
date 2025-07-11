import React from 'react';

export default function LLMConfiguration() {
  const contentHtml = `<p className="text-gray-700 dark:text-gray-300 mb-6">Most LLMs come with various configuration options that control the output. Effective prompt engineering requires setting these optimally for your task.</p><div className="space-y-4"><article className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow"><h4 className="font-medium mb-2">Temperature</h4><p className="text-gray-600 dark:text-gray-400">Controls the degree of randomness in the output. Lower temperatures (e.g., 0.1) are good for prompts that expect a more deterministic, factual response. Higher temperatures (e.g., 0.9) can lead to more diverse or creative results.</p></article><article className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow"><h4 className="font-medium mb-2">Top-K</h4><p className="text-gray-600 dark:text-gray-400">Restricts the model's output to the K most likely tokens. A low Top-K value makes the output more predictable, while a high value allows for more creativity.</p></article><article className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow"><h4 className="font-medium mb-2">Top-P</h4><p className="text-gray-600 dark:text-gray-400">Selects tokens based on their cumulative probability. It provides a more dynamic way to control randomness compared to Top-K.</p></article></div>`;
  return (
    <section id="llm-config" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">LLM Configuration</h2>
      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml.replace(/\\n/g, '<br />') }} />
    </section>
  );
}