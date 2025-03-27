This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First you need to create a .env.local file that holds your API key in my case it was 

OPENAI_API_KEY:"api-key here"

Then, to get dependencies:

```bash
npm install 
```

Then to run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

I made this project assuming that it was meant to converse with a tax-expert ChatBot that could answer questions on taxes and related topics. I also assumed that any AI API could be used, so I decided to use OpenAI.

Areas of improvement: I could've added the "stretches" mentioned in the project description, and if I had more time, I would've been able to apply multimedia outputs using the generateObject commands in the Vercel AI SDK and the utilization of charting libraries. It would also require formatting the data from the documents into a table using queries (SQL) and then using the charting libraries.

Other than that, there were some minor features I could've added, such as allowing the attachment of multiple files at different times (instead of attaching five at once) and the ability to send documents by themselves. I would've implemented this by having a template text for blank file submissions, such as "read this." This would make it easier to read and implement documents with the chatbot without any accompanying text.
