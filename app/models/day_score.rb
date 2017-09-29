class DayScore < ApplicationRecord
  validates :tension, inclusion: { in: 1..10, message: "Should be between 1 and 10"}
  validates :sleep, inclusion: { in: 1..10, message: "Should be between 1 and 10"}
end
