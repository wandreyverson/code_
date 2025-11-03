import { Clock, TrendingUp, Dumbbell, Users } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const workouts = [
  {
    id: 1,
    title: "Full Body Strength Builder",
    description: "Complete workout targeting all major muscle groups for balanced strength development.",
    duration: "45 min",
    level: "Intermediate",
    goal: "Build Strength",
    participants: "2.4k",
    image: "/person-doing-barbell-squats-in-gym.jpg",
    equipment: ["Barbell", "Dumbbells", "Bench"],
  },
  {
    id: 2,
    title: "HIIT Fat Burner",
    description: "High-intensity interval training designed to maximize calorie burn and boost metabolism.",
    duration: "30 min",
    level: "Advanced",
    goal: "Weight Loss",
    participants: "3.1k",
    image: "/person-doing-burpees-high-intensity-workout.jpg",
    equipment: ["Bodyweight"],
  },
  {
    id: 3,
    title: "Beginner's Push Pull Legs",
    description: "Perfect introduction to structured training with a proven push-pull-legs split routine.",
    duration: "40 min",
    level: "Beginner",
    goal: "Build Muscle",
    participants: "5.2k",
    image: "/beginner-doing-dumbbell-exercises.jpg",
    equipment: ["Dumbbells", "Cable Machine"],
  },
  {
    id: 4,
    title: "Powerlifting Foundation",
    description: "Focus on the big three: squat, bench press, and deadlift with progressive overload.",
    duration: "60 min",
    level: "Advanced",
    goal: "Build Strength",
    participants: "1.8k",
    image: "/powerlifter-doing-deadlift-with-heavy-barbell.jpg",
    equipment: ["Barbell", "Power Rack", "Bench"],
  },
  {
    id: 5,
    title: "Yoga Flow for Athletes",
    description: "Improve flexibility, balance, and recovery with this athlete-focused yoga sequence.",
    duration: "35 min",
    level: "Beginner",
    goal: "Flexibility",
    participants: "4.3k",
    image: "/person-doing-yoga-warrior-pose.jpg",
    equipment: ["Yoga Mat"],
  },
  {
    id: 6,
    title: "Cardio Endurance Builder",
    description: "Progressive cardio program to build stamina and cardiovascular fitness.",
    duration: "50 min",
    level: "Intermediate",
    goal: "Endurance",
    participants: "2.9k",
    image: "/person-on-treadmill.png",
    equipment: ["Treadmill", "Rowing Machine"],
  },
  {
    id: 7,
    title: "Bodyweight Mastery",
    description: "Master calisthenics with progressive bodyweight exercises requiring no equipment.",
    duration: "40 min",
    level: "Intermediate",
    goal: "Build Strength",
    participants: "6.1k",
    image: "/person-doing-pull-ups-calisthenics.jpg",
    equipment: ["Pull-up Bar"],
  },
  {
    id: 8,
    title: "Hypertrophy Upper Body",
    description: "Maximize muscle growth in chest, back, shoulders, and arms with volume training.",
    duration: "55 min",
    level: "Advanced",
    goal: "Build Muscle",
    participants: "3.7k",
    image: "/muscular-person-doing-cable-flyes.jpg",
    equipment: ["Dumbbells", "Cable Machine", "Bench"],
  },
  {
    id: 9,
    title: "Core & Abs Sculptor",
    description: "Targeted core training to build strength and definition in your midsection.",
    duration: "25 min",
    level: "Beginner",
    goal: "Build Strength",
    participants: "7.2k",
    image: "/person-doing-plank-core-exercise.jpg",
    equipment: ["Exercise Mat", "Medicine Ball"],
  },
]

export function WorkoutsGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">All Workout Programs</h2>
            <p className="text-neutral-600">Showing {workouts.length} programs</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <Card key={workout.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={workout.image || "/placeholder.svg"}
                  alt={workout.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-orange-600 hover:bg-orange-700">{workout.level}</Badge>
              </div>

              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-neutral-900 mb-2 text-balance">{workout.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{workout.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {workout.equipment.map((item) => (
                    <Badge key={item} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-1.5 text-neutral-600">
                    <Clock className="h-4 w-4" />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-600">
                    <TrendingUp className="h-4 w-4" />
                    <span>{workout.goal.split(" ")[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-600">
                    <Users className="h-4 w-4" />
                    <span>{workout.participants}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-5 pt-0">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <Dumbbell className="h-4 w-4 mr-2" />
                  Start Workout
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
