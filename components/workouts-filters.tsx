"use client"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export function WorkoutsFilters() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [selectedDuration, setSelectedDuration] = useState<string>("all")
  const [selectedGoal, setSelectedGoal] = useState<string>("all")

  const activeFilters = [
    selectedLevel !== "all" && selectedLevel,
    selectedDuration !== "all" && selectedDuration,
    selectedGoal !== "all" && selectedGoal,
  ].filter(Boolean)

  const clearFilters = () => {
    setSelectedLevel("all")
    setSelectedDuration("all")
    setSelectedGoal("all")
    setSearchQuery("")
  }

  return (
    <section className="bg-neutral-50 border-b border-neutral-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <Input
              type="search"
              placeholder="Search workouts by name, muscle group, or equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-neutral-700">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters:</span>
            </div>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDuration} onValueChange={setSelectedDuration}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Duration</SelectItem>
                <SelectItem value="short">Under 30 min</SelectItem>
                <SelectItem value="medium">30-60 min</SelectItem>
                <SelectItem value="long">Over 60 min</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedGoal} onValueChange={setSelectedGoal}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Goals</SelectItem>
                <SelectItem value="strength">Build Strength</SelectItem>
                <SelectItem value="muscle">Build Muscle</SelectItem>
                <SelectItem value="weight-loss">Weight Loss</SelectItem>
                <SelectItem value="endurance">Endurance</SelectItem>
                <SelectItem value="flexibility">Flexibility</SelectItem>
              </SelectContent>
            </Select>

            {activeFilters.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
              >
                Clear all
              </Button>
            )}
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-neutral-600">Active filters:</span>
              {activeFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                  {filter}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
