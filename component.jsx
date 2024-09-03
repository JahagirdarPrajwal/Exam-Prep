/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YWkzAxtVUo3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          Past Paper Genius
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Upload</Button>
          <Button>Sign In</Button>
        </div>
      </header>
      <main className="flex-1 bg-background text-foreground">
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="grid gap-2">
              <h1 className="text-4xl font-bold">Find Past Question Papers</h1>
              <p className="text-muted-foreground">Search for past question papers by semester, branch, and subject.</p>
            </div>
            <form className="grid md:grid-cols-3 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Semester 1</SelectItem>
                  <SelectItem value="2">Semester 2</SelectItem>
                  <SelectItem value="3">Semester 3</SelectItem>
                  <SelectItem value="4">Semester 4</SelectItem>
                  <SelectItem value="5">Semester 5</SelectItem>
                  <SelectItem value="6">Semester 6</SelectItem>
                  <SelectItem value="7">Semester 7</SelectItem>
                  <SelectItem value="8">Semester 8</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cse">Computer Science</SelectItem>
                  <SelectItem value="ece">Electronics</SelectItem>
                  <SelectItem value="me">Mechanical</SelectItem>
                  <SelectItem value="civil">Civil</SelectItem>
                  <SelectItem value="ee">Electrical</SelectItem>
                </SelectContent>
              </Select>
              <Input type="search" placeholder="Search by subject..." className="bg-muted text-muted-foreground" />
            </form>
          </div>
        </section>
        <section className="bg-muted py-12 px-6">
          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">Browse by Category</h2>
              <p className="text-muted-foreground">Explore past question papers by semester, branch, and subject.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="#"
                className="bg-background text-foreground rounded-lg p-6 hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <div className="flex items-center gap-4">
                  <BookIcon className="w-8 h-8" />
                  <div>
                    <h3 className="font-semibold">Semester 1</h3>
                    <p className="text-muted-foreground">Browse past papers for Semester 1</p>
                  </div>
                </div>
              </Link>
              <Link
                href="#"
                className="bg-background text-foreground rounded-lg p-6 hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <div className="flex items-center gap-4">
                  <CpuIcon className="w-8 h-8" />
                  <div>
                    <h3 className="font-semibold">Computer Science</h3>
                    <p className="text-muted-foreground">Browse past papers for Computer Science</p>
                  </div>
                </div>
              </Link>
              <Link
                href="#"
                className="bg-background text-foreground rounded-lg p-6 hover:bg-accent hover:text-accent-foreground transition-colors"
                prefetch={false}
              >
                <div className="flex items-center gap-4">
                  <BookOpenIcon className="w-8 h-8" />
                  <div>
                    <h3 className="font-semibold">Mathematics</h3>
                    <p className="text-muted-foreground">Browse past papers for Mathematics</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">Analyze Past Papers</h2>
              <p className="text-muted-foreground">Get insights and predictions for future question papers.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Prediction Engine</CardTitle>
                  <CardDescription>Analyze past papers and get predictions for future questions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <CpuIcon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Computer Science</h3>
                        <p className="text-muted-foreground text-sm">Likely future questions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpenIcon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Mathematics</h3>
                        <p className="text-muted-foreground text-sm">Likely future questions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CpuIcon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Electronics</h3>
                        <p className="text-muted-foreground text-sm">Likely future questions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>View Predictions</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Gemini API Integration</CardTitle>
                  <CardDescription>Get answers and solutions for past question papers.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <BookIcon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Semester 1</h3>
                        <p className="text-muted-foreground text-sm">Answers and solutions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpenIcon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Mathematics</h3>
                        <p className="text-muted-foreground text-sm">Answers and solutions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CpuIcon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Computer Science</h3>
                        <p className="text-muted-foreground text-sm">Answers and solutions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Explore Answers</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 px-6">
          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">Contribute and Discuss</h2>
              <p className="text-muted-foreground">
                Upload your own past question papers and engage with the community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Past Papers</CardTitle>
                  <CardDescription>Share your past question papers with the community.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <UploadIcon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Upload a Paper</h3>
                        <p className="text-muted-foreground text-sm">Add your past question papers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TagIcon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Tag Metadata</h3>
                        <p className="text-muted-foreground text-sm">Add details like semester, branch, and subject</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <UsersIcon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Community Contribution</h3>
                        <p className="text-muted-foreground text-sm">Help build the largest past paper repository</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Upload Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Discuss and Engage</CardTitle>
                  <CardDescription>Interact with the community and share insights.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <MessageCircleIcon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Discussion Forums</h3>
                        <p className="text-muted-foreground text-sm">Discuss past papers and share knowledge</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <StarIcon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Rate and Review</h3>
                        <p className="text-muted-foreground text-sm">
                          Help the community by rating and reviewing papers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ReplyIcon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Leave Comments</h3>
                        <p className="text-muted-foreground text-sm">Provide feedback and ask questions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Join the Discussion</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6 flex items-center justify-between">
        <p>&copy; 2023 Past Paper Genius. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-primary-foreground hover:text-accent-foreground" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-primary-foreground hover:text-accent-foreground" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function ReplyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}


function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}