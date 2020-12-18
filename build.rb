require 'rubygems'
require 'zip/zip'
require 'dir'
require 'fileutils'
require 'tempfile'

def ZipDir(directory, zipfile_name)
  Zip::ZipFile.open(zipfile_name, Zip::ZipFile::CREATE) do |zipfile|
      Dir[File.join(directory, '*')].each do |file|
        zipfile.add(file.sub(directory, ''), file)
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


createDir("packBuild")
createDir("BUILD")
createDir("BUILD/packs")

FileUtils.copy_entry("packBase/", "packBuild/pack")
ZipDir("./packBuild/pack/", "packBuild/0.mcpack") # Dark nether
replaceInFile('./packBuild/pack/shaders/glsl/renderchunk.fragment', "vec4 ambientOclusion = vec4(uv1.y + isHell* 0.5);", "vec4 ambientOclusion = vec4(uv1.y + isHell* 2);")
ZipDir("./packBuild/pack/", "packBuild/1.mcpack") # Light nether
FileUtils.rm_rf("packBuild/pack")
FileUtils.copy_entry("packBuild/", "BUILD/packs")
FileUtils.copy_entry("siteBase/", "BUILD")

FileUtils.rm_rf("packBuild")