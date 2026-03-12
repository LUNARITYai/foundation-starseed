import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Input,
  Stack,
  Container,
  Alert,
  AlertTitle,
  AlertDescription,
} from '@/components'

function App() {
  return (
    <Container className="py-12">
      <Stack gap={8}>
        <Stack gap={2}>
          <h1 className="text-4xl font-bold">Foundation Starseed</h1>
          <p className="text-neutral-500">Design system component showcase</p>
        </Stack>

        <Stack gap={4}>
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <Stack direction="row" gap={3}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </Stack>
        </Stack>

        <Stack gap={4}>
          <h2 className="text-2xl font-semibold">Badges</h2>
          <Stack direction="row" gap={3}>
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </Stack>
        </Stack>

        <Stack gap={4}>
          <h2 className="text-2xl font-semibold">Input</h2>
          <div className="max-w-sm">
            <Input placeholder="Enter something..." />
          </div>
        </Stack>

        <Stack gap={4}>
          <h2 className="text-2xl font-semibold">Card</h2>
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Project Setup</CardTitle>
              <CardDescription>
                Your design system is ready to go.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-500">
                All tokens, components, and tooling are configured.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Get Started</Button>
            </CardFooter>
          </Card>
        </Stack>

        <Stack gap={4}>
          <h2 className="text-2xl font-semibold">Alert</h2>
          <Alert>
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              This is a default informational alert.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong.</AlertDescription>
          </Alert>
        </Stack>
      </Stack>
    </Container>
  )
}

export default App
