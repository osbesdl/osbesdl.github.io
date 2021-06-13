def resetOptions()
  File.open($options, 'w') { |file| file.write($defaultOptions) }
end