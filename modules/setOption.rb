def setOption(option, value)
  lineno=-1
  settingid=0
  File.open($options).each_line do |line|
    lineno+=1
    if line.include? option
      settingid=lineno
      break
    end
  end
  optionfile = File.readlines($options).map(&:chomp)
  optionfile[lineno] = optionfile[lineno].to_s.gsub(/.$/, value)
  File.open($options, 'w') { |file| file.write(optionfile.join("\n")) }
end