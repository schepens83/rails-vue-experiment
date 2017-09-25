class PagesController < ApplicationController
  def calculator
  end

  def canvas
    @pixels = (1..1000).map { |n| n }
  end

  def to_do

  end
end
