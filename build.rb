puts "Initialising..."
require 'rubygems'
require 'archive/zip'
require 'dir'
require 'fileutils'
require 'tempfile'

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

def replaceInFile(filename, originalstring, newstring)
  # save the content of the file
  file = File.read(filename)
  # replace (globally) the search string with the new string
  new_content = file.gsub(originalstring, newstring)
  # open the file again and write the new content to it
  File.open(filename, 'w') { |line| line.puts new_content }
end

def makePage(id)
  createDir("siteBuild/"+id)
  FileUtils.copy_entry("siteBuild/index.html", "siteBuild/"+id+"/index.html")
end

if ARGV[0]!="--no-pack"
  puts "Creating directories..."
  createDir("packBuild")
  createDir("BUILD")
  createDir("BUILD/packs")
  
  puts "\nCopying pack base... (This takes a while)"
  FileUtils.copy_entry("packBase/", "packBuild/pack")
  
  # OSBES12
  # from right to left:
  # 1 - compatability mode
  # 2 - light nether

  $exportMode='r' # Release mode
  puts "Building normal dark nether pack..."
  load("buildScripts/00.rb")
  
  puts "Building normal light nether pack..."
  load("buildScripts/01.rb")
  
  puts "Building compatable light nether pack..."
  load("buildScripts/11.rb")

  puts "Building compatable dark nether pack..."
  load("buildScripts/10.rb")
  
  puts "Cleaning up..."
  FileUtils.rm_rf("packBuild/pack")
  FileUtils.copy_entry("packBuild/", "BUILD/packs")
  FileUtils.rm_rf("packBuild")
end
puts "\nCopying site base..."
FileUtils.copy_entry("siteBase/", "BUILD")
puts "\ndone."