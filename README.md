# Next.js Docker Starter with Coolify CI/CD

A production-ready starter template for Next.js applications with TypeScript, Docker support, and automated CI/CD pipeline using Coolify.

![Next.js Docker Starter](public/nextjs-typescript-docker-react.png)

## Tech Stack

- Next.js 15
- TypeScript
- Docker
- React 18
- Coolify (Deployment & CI/CD)
- GitHub Actions

## Project Structure

```
nextjs-dockerise/
├── app/                    # Next.js 15 app directory
├── public/                 # Static files
├── components/             # React components
├── .coolify/              # Coolify configuration
│   ├── Dockerfile         # Production Docker configuration
│   └── docker-compose.yml # Production compose file
├── .github/               # GitHub Actions workflows
│   └── workflows/         # CI/CD pipeline configuration
├── Dockerfile.dev         # Development Docker configuration
├── docker-compose.yml     # Development compose file
└── package.json          # Project dependencies
```

## Development Setup

1. Clone the repository:

```bash
git clone https://github.com/sumoncse19/nextjs-docker-starter.git
cd nextjs-docker-starter
```

2. Install dependencies:

```bash
pnpm install   # or yarn install, npm install
```

3. Development with Docker:

```bash
# Start development server with hot-reload
docker-compose up

# Stop containers
docker-compose down
```

4. Development without Docker:

```bash
pnpm dev   # or yarn dev, npm run dev
```

## CI/CD Pipeline Setup

### 1. GitHub Secrets Configuration

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `DOCKERHUB_USERNAME`: Your Docker Hub username
   - `DOCKERHUB_TOKEN`: Your Docker Hub access token
   - `COOLIFY_HOST`: Your Coolify server hostname/IP
   - `COOLIFY_USERNAME`: SSH username for Coolify server
   - `COOLIFY_SSH_KEY`: SSH private key for Coolify server

### 2. Coolify Instance Setup

1. **Install Coolify**:
   ```bash
   # On your server
   curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
   ```

2. **Access Coolify Dashboard**:
   - Open `http://your-server-ip:8000`
   - Complete the initial setup

3. **Create New Project**:
   - Click "New Project"
   - Select "Docker Compose"
   - Configure environment variables:
     ```
     DOCKER_REGISTRY=docker.io
     DOCKER_USERNAME=your-dockerhub-username
     PORT=3000
     NEXT_PUBLIC_API_URL=your-api-url
     ```

4. **Configure Deployment**:
   - Set deployment path
   - Configure build settings
   - Enable automatic deployments

## Production Deployment

The CI/CD pipeline automatically handles deployments:

1. **On Pull Request**:
   - Runs tests
   - Type checking
   - Linting

2. **On Push to Develop**:
   - Builds Docker image
   - Pushes to Docker Hub
   - Tags with commit SHA

3. **On Push to Main**:
   - Builds Docker image
   - Pushes to Docker Hub
   - Deploys to Coolify

## Docker Commands

```bash
# Remove all containers
docker rm -f $(docker ps -aq)

# Remove all images
docker rmi -f $(docker images -q)

# Clean up system
docker system prune -a

# View logs
docker-compose logs -f
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build production application
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript compiler check

# Docker Development
docker-compose up dev      # Start development environment
docker-compose up prod     # Start production environment
docker-compose down        # Stop containers
```

## Best Practices

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write unit tests for components
- Use environment variables for configuration
- Follow Git branching strategy:
  - main: production-ready code
  - develop: development branch
  - feature/\*: new features
  - hotfix/\*: urgent fixes

## Common Issues

1. Port already in use:
```bash
docker-compose down
# or
kill $(lsof -t -i:3000)
```

2. Docker cache issues:
```bash
docker-compose build --no-cache
```

3. Coolify deployment issues:
```bash
# Check Coolify logs
coolify logs

# Restart Coolify service
coolify restart
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## Full documentation

Read full article on medium - [Click Here](https://medium.com/@sumoncse19/next-js-docker-starter-a-production-ready-boilerplate-with-typescript-docker-support-045ea672af6c)
