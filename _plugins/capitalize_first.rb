require 'liquid'
require 'uri'

# Capitalize all words of the input
module Jekyll
  module CapitalizeFirst
    def capitalize_first(words)
      [words].collect do |word|
          letters = word.split('')
          letters.first.upcase!
          letters.join
        end
    end
  end
end

Liquid::Template.register_filter(Jekyll::CapitalizeFirst)
