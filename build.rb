puts "Initialising..."
require 'rubygems'
require 'archive/zip'
require 'dir'
require 'fileutils'
require 'tempfile'
require 'git'

def ZipDir(directory, zipfile_name)
  Zip::ZipFile.open(zipfile_name, Zip::ZipFile::CREATE) do |zipfile|
      Dir[File.join(directory+"/**/*")].each do |file|
        zipfile.add(file.sub(directory[1..-1], ''), file)
      end
  end
end
def createDir(dir)
  Dir.mkdir(dir) unless File.exists?(dir)
  FileUtils.rm_rf Dir.glob("#{dir}/*")
end

=begin
def makePage(id)
  createDir("siteBuild/"+id)
  FileUtils.copy_entry("siteBuild/index.html", "siteBuild/"+id+"/index.html")
end

puts "Checking for pack base update..."
system("git submodule update --init --recursive")
if ARGV[0]!="--no-pack"
  puts "Creating directories..."
  createDir("packBuild")
  createDir("BUILD")
  createDir("BUILD/packs")
  
  puts "\nCopying pack base... (This takes a while)"
  FileUtils.copy_entry("packBase/", "packBuild/pack")
  
  puts "Cleaning up pack base..."
  FileUtils.rm("packBuild/pack/.git")
  begin
    FileUtils.rm("packBuild/pack/.gitignore ")
  rescue
    0
  end
  FileUtils.rm("packBuild/pack/LICENSE")
  FileUtils.rm("packBuild/pack/README.md")
  
  # from the right
  # 1 - dark mode
  # 2 - compatability mode
  # 3 - experimental features
=end
  require './modules/resetOptions.rb'
  require './modules/setOption.rb'
  require './modules/buildPack.rb'
  require './modules/optionDefinitions.rb'

  $exportMode='r' # Release mode
  $options="./options.txt"
  $defaultOptions = File.readlines($options).map(&:chomp).join("\n")

  puts "Building normal dark nether pack..."
  buildPack('00')
  
  puts "Building normal light nether pack..."
  buildPack('01')

  puts "Building compatable dark nether pack..."
  buildPack('10')

  puts "Building compatable light nether pack..."
  buildPack('11')
  $exportMode='e' # Experimental mode
=begin
  puts "Cleaning up..."
  FileUtils.rm_rf("packBuild/pack")
  
  puts "\nCloning experimental pack... (This takes a while)"
  Git.clone('https://github.com/jebbyk/OSBES-minecraft-bedrock-edition-shader', 'packBuild/pack')

  puts "Cleaning up..."
  FileUtils.rm_rf("packBuild/pack")
  FileUtils.copy_entry("packBuild/", "BUILD/packs")
  FileUtils.rm_rf("packBuild")
end
puts "\nCopying site base..."
FileUtils.copy_entry("siteBase/", "BUILD")
puts "\ndone."
=end