This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Tên Dự Án Của Bạn

![CI Status](https://github.com/hellowordvu-bot/IE101.Q11.LT/actions/workflows/main.yml/badge.svg)

Đây là dự án Demo quy trình CI/CD tự động hóa việc Build, Test và Push Docker Image.

---

## 🚀 1. Hướng dẫn chạy Local (Run Locally)

Để chạy dự án này trên máy cá nhân, bạn sử dụng các lệnh sau:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

graph LR
    classDef plain fill:#fff,stroke:#333,stroke-width:1px;
    classDef git fill:#f1f8ff,stroke:#0366d6,stroke-width:2px;
    classDef docker fill:#e6f7ff,stroke:#099cec,stroke-width:2px;

    %% Khu vực 1: Local
    subgraph Local [💻 Local Machine]
        Dev(🧑‍💻 Dev) -->|Push Code| GitHub
    end

    %% Khu vực 2: GitHub
    subgraph GitHub_Eco [🐙 GitHub Ecosystem]
        GitHub[Repo] -->|Trigger| Actions
        
        subgraph Actions [⚙️ CI Pipeline]
            direction TB
            Checkout[📥 Checkout] --> Test{🧪 Test}
            Test --> Build[📦 Build App]
            Build --> Docker[🐳 Build Image]
        end
    end

    %% Khu vực 3: Docker Hub
    subgraph Hub [☁️ Docker Hub]
        Registry[("Docker Registry")]:::docker
    end

    Docker -->|Push Image| Registry

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
