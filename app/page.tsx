import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, Briefcase, Code, Languages } from "lucide-react"

export default function Home() {
  return (
    <div className="container py-12 space-y-12">
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Liang Telkamp</h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            AI Specialist & Consultant with expertise in Python, C++, and R
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/cv">
                View CV <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
          <p className="max-w-[700px] text-muted-foreground">
            I'm an AI specialist with a strong academic background in Artificial Intelligence and Logic. Currently
            working as a Trainee Consultant at NextHuman, I develop and implement AI demo solutions for potential
            clients. My experience spans from teaching at the University of Amsterdam to administrative roles that have
            honed my attention to detail.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <Languages className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Languages</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge>Dutch - Fluent</Badge>
                  <Badge>English - Good</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <Code className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Programming</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge>Python</Badge>
                  <Badge>C++</Badge>
                  <Badge>R</Badge>
                  <Badge>HTML</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <BookOpen className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Education</h3>
                <div className="flex flex-col gap-2">
                  <span>MSc Artificial Intelligence & Logic</span>
                  <span>BSc Artificial Intelligence</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Experience Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">NextHuman</h3>
                  <p className="text-sm text-muted-foreground">Trainee Consultant | August 2024 - Present</p>
                  <p className="mt-2">Developing and implementing AI demo solutions for potential clients.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">University of Amsterdam</h3>
                  <p className="text-sm text-muted-foreground">Teaching Assistant | August 2022 - December 2024</p>
                  <p className="mt-2">
                    Teaching assistant for Computational Logic, Bayesian Statistics for Machine Learning, and Data
                    Structures and Algorithms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-6">
          <Button variant="outline" asChild>
            <Link href="/cv">
              View Full CV <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
