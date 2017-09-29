class CreateDayScores < ActiveRecord::Migration[5.1]
  def change
    create_table :day_scores do |t|
      t.date :day
      t.integer :tension
      t.integer :sleep

      t.timestamps
    end
  end
end
