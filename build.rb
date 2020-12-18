puts "Initialising..."
require 'rubygems'
require 'zip/zip'
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
createDir("packBuild")
createDir("siteBuild")
createDir("BUILD")
createDir("BUILD/packs")

puts "\nCopying base pack... (This takes a while)"
FileUtils.copy_entry("packBase/", "packBuild/pack")
puts "Building dark nether pack..."
ZipDir("packBuild/pack/", "packBuild/0.mcpack") # Dark nether
puts "Building light nether pack..."
replaceInFile('./packBuild/pack/shaders/glsl/renderchunk.fragment', "vec4 ambientOclusion = vec4(uv1.y + isHell* 0.5);", "vec4 ambientOclusion = vec4(uv1.y + isHell* 2.0);")
ZipDir("packBuild/pack/", "packBuild/1.mcpack") # Light nether
puts("Finishing pack build...")
FileUtils.rm_rf("packBuild/pack")
FileUtils.copy_entry("packBuild/", "BUILD/packs")
FileUtils.rm_rf("packBuild")

puts "\nCopying site base"
FileUtils.copy_entry("siteBase/", "BUILD")
puts "Building site..."
FileUtils.copy_entry("resources/base.html", "siteBuild/index.html")
ids = ['0','1']
ids.each { |id| makePage(id) }
puts "Finishing site build..."
FileUtils.rm("siteBuild/index.html")
FileUtils.copy_entry("siteBuild/", "BUILD")
FileUtils.rm_rf("siteBuild")
puts "\ndone."