# Setup Notes

## What is included

- Root workspace configuration for the frontend app
- `frontend/` Vite + React + TypeScript landing page
- Placeholder backend and contracts directories
- Architecture documentation for future implementation
- Complete project structure aligned with Stellar Wave Program requirements

## What is not implemented yet

- Student fee wallet creation (Stellar accounts)
- Parent payment flow via Stellar SDK
- Horizon payment stream listener
- Authentication and parent linking
- School dashboard business logic
- Database schema and PostgreSQL setup
- Auto-clearance logic

## Current Status

The landing page is fully functional and ready to deploy. It communicates the core value proposition:

**"Because no child should be sent home over a payment that was already made."**

The frontend demonstrates the product vision with a live dashboard mockup showing:
- Student payment progress (60% paid)
- Real-time balance tracking
- Payment history synced from Stellar
- Clear visual indicators for clearance status

## Deployment

The frontend can be deployed to static hosts such as Vercel, Netlify, or Cloudflare Pages after running:

```bash
npm install
npm run build
```

The build output will be in `frontend/dist/`.

## Next Steps

1. **Backend Setup**: Implement Node.js API with Stellar SDK integration
2. **Stellar Integration**: Create student fee wallets and set up Horizon event streaming
3. **Parent Portal**: Build authenticated parent view with real payment functionality
4. **School Dashboard**: Implement roster management and clearance tracking
5. **Testing**: End-to-end demo on Stellar testnet

## Target Users

- **Parents** in Nigerian primary and secondary schools who pay fees in installments
- **Private schools and academies** (50–500 students) that want to eliminate bursar disputes
- **Vocational and coding bootcamps** (like Semicolon, AltSchool) with monthly payment plans

