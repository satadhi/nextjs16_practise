## Getting Started

First, run the development server:

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

1. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

2. Run the `docker-compose` file to start the mongodb server.
## Learn More

Folder structure

```sh
jira-board/
├── docker-compose.yml
├── .env.local
├── package.json
├── next.config.js
├── tsconfig.json
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                # Board UI
│   │   │
│   │   ├── api/
│   │   │   ├── socket/
│   │   │   │   └── route.ts         # Socket.IO server init
│   │   │   │
│   │   │   ├── boards/
│   │   │   │   └── route.ts         # GET/POST boards
│   │   │   │
│   │   │   ├── cards/
│   │   │   │   └── route.ts         # CRUD cards
│   │   │   │
│   │   │   └── users/
│   │   │       └── route.ts         # (optional)
│   │   │
│   ├── components/
│   │   ├── Board/
│   │   │   ├── Board.tsx
│   │   │   ├── Column.tsx
│   │   │   └── Card.tsx
│   │   │
│   │   ├── DragDrop/
│   │   │   └── DndProvider.tsx
│   │   │
│   │   └── ui/                      # buttons, modal, input
│   │
│   ├── lib/
│   │   ├── mongoose.ts              # Mongo connection
│   │   ├── socket.ts                # Client socket instance
│   │   └── constants.ts
│   │
│   ├── models/
│   │   ├── User.ts
│   │   ├── Board.ts
│   │   └── Card.ts
│   │
│   ├── store/
│   │   └── boardStore.ts            # Zustand / Redux
│   │
│   ├── hooks/
│   │   ├── useSocket.ts
│   │   └── useBoard.ts
│   │
│   └── types/
│       └── index.ts
│
└── README.md

```