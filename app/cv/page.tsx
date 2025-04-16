import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award } from "lucide-react"

export default function CVPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Curriculum Vitae</h1>

      {/* Personal Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Name</h3>
              <p>Liang Telkamp</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>telkampliang@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>XX</p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>Amsterdam</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Dutch - Fluent</Badge>
                <Badge>English - Good</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>C++</Badge>
                <Badge>R</Badge>
                <Badge>HTML</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Work Experience */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Work Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">NextHuman</h3>
                <p className="text-sm text-muted-foreground">Trainee Consultant</p>
              </div>
              <Badge variant="outline">August 2024 - Present</Badge>
            </div>
            <p>Developing and implement AI demo solutions for potential clients.</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">University of Amsterdam</h3>
                <p className="text-sm text-muted-foreground">Administrative Secretary</p>
              </div>
              <Badge variant="outline">September 2023 - September 2024</Badge>
            </div>
            <p>
              As an Administrative Secretary for the student council, my primary responsibility is to accurately
              document the minutes of meetings between the faculty dean and the student council. This role requires keen
              attention to detail and the ability to capture essential discussions and decisions concisely.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">University of Amsterdam</h3>
                <p className="text-sm text-muted-foreground">Teaching Assistant</p>
              </div>
              <Badge variant="outline">August 2022 - December 2024</Badge>
            </div>
            <p>
              I am currently working as a teaching assistant for courses such as Computational Logic, Bayesian
              Statistics for Machine Learning, and Data Structures and Algorithms.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Cygnus Gymnasium</h3>
                <p className="text-sm text-muted-foreground">Education Assistant</p>
              </div>
              <Badge variant="outline">November 2021 - March 2022</Badge>
            </div>
            <p>Offered extra help and guidance to students through a support class after school.</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Vibe Group</h3>
                <p className="text-sm text-muted-foreground">Administrative Assistant</p>
              </div>
              <Badge variant="outline">July 2021 - October 2021</Badge>
            </div>
            <p>Helped transfer data to a new system in a commercial work environment.</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">StudentsPlus</h3>
                <p className="text-sm text-muted-foreground">Tutor</p>
              </div>
              <Badge variant="outline">July 2019 - September 2021</Badge>
            </div>
            <p>Assisted pupils with science homework (math, chemistry, and physics).</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Emanuels makelaardij</h3>
                <p className="text-sm text-muted-foreground">Administrative Assistant</p>
              </div>
              <Badge variant="outline">July 2019 - September 2020</Badge>
            </div>
            <p>
              Worked as an assistant at the back office of a real estate agency. This entailed customer support and
              doing research on the housing market.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">University of Amsterdam</h3>
                <p className="text-sm text-muted-foreground">MSc Artificial Intelligence & MSc Logic</p>
              </div>
              <Badge variant="outline">September 2023 - Present</Badge>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">University of Amsterdam</h3>
                <p className="text-sm text-muted-foreground">
                  BSc Artificial Intelligence with a minor Logic & Computability
                </p>
              </div>
              <Badge variant="outline">September 2020 - August 2023</Badge>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Cygnus Gymnasium</h3>
                <p className="text-sm text-muted-foreground">Nature & Technology and Nature & Health</p>
              </div>
              <Badge variant="outline">September 2013 - July 2019</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Extracurricular Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Extracurricular Activities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Stichting Cygnus Alumni</h3>
                <p className="text-sm text-muted-foreground">Treasurer</p>
              </div>
              <Badge variant="outline">November 2021 - December 2024</Badge>
            </div>
            <p>Treasurer of the board of the Alumni Association for my high school.</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Stichting Rondom de Klas</h3>
                <p className="text-sm text-muted-foreground">Volunteer</p>
              </div>
              <Badge variant="outline">November 2022 - April 2023</Badge>
            </div>
            <p>Assisted elementary school children with their reading skills.</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Faculty Student Council 22/23 - FNWI</h3>
                <p className="text-sm text-muted-foreground">Vice-Chair</p>
              </div>
              <Badge variant="outline">September 2022 - August 2023</Badge>
            </div>
            <p>
              Representing the voices of students at the faculty level. Trying to improve the study climate for students
              by organizing events, but also by engaging in conversations with coworkers of the faculty and the board of
              the faculty.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Faculty Student Council 21/22 - FNWI</h3>
                <p className="text-sm text-muted-foreground">Council Assistant</p>
              </div>
              <Badge variant="outline">December 2021 - August 2022</Badge>
            </div>
            <p>
              Served as a council assistant for the faculty's student council, working on issues like facilities and
              diversity as well as educational requirements like TERs.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
