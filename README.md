This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First you need to create a .env.local file that holds your API key. In my case it was 

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

Other than that, some minor features need to be added, such as allowing the attachment of multiple files at different times (instead of attaching five at once) and the ability to send documents by themselves. I would've implemented this by having a template text for blank file submissions, such as "read this." This would make it easier to read and implement documents with the chatbot without any accompanying text.


## Demo

Heres a link/gif to a demo of the app being used and its functionalities being tested. Keep in mind this is a prototype, so the front end still needs some work.

<div>
    <a href="https://www.loom.com/share/f2562c9e601e4ef5be05d6d4288d8236">
      <p>Create Next App - 26 March 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/f2562c9e601e4ef5be05d6d4288d8236">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/f2562c9e601e4ef5be05d6d4288d8236-6ebf6df3d1e3afc8-full-play.gif">
    </a>
  </div>
