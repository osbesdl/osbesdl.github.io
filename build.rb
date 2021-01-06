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
createDir("packBuild")
createDir("BUILD")
createDir("BUILD/packs")

puts "\nCopying pack base... (This takes a while)"
FileUtils.copy_entry("packBase/", "packBuild/pack")
puts "Cleaning up pack base..."
FileUtils.rm("packBuild/pack/.git")
FileUtils.rm("packBuild/pack/.gitignore ")
FileUtils.rm("packBuild/pack/LICENSE")
FileUtils.rm("packBuild/pack/README.md")
puts "Building normal dark nether pack..."
Archive::Zip.archive("packBuild/OSBES00.mcpack", "packBuild/pack/.") # Dark nether normal mode
puts "Building normal light nether pack..."
replaceInFile('./packBuild/pack/shaders/glsl/renderchunk.fragment', "resultLighting += vec3(isHell * 0.125);", "resultLighting += vec3(isHell * 0.4);")
Archive::Zip.archive("packBuild/OSBES01.mcpack", "packBuild/pack/.") # Light nether normal mode
puts "Building compatable light nether pack..."
FileUtils.rm_rf("packBuild/pack/textures/")
replaceInFile('./packBuild/pack/shaders/glsl/renderchunk.fragment', "vec4 diffuse = texelFetch(TEXTURE_0, ivec2((uv0 - localDiffuseCoord) * 1024.0), 0);", "vec4 diffuse = texelFetch(TEXTURE_0, ivec2((uv0) * 1024.0), 0);")
replaceInFile('./packBuild/pack/shaders/glsl/renderchunk.fragment', "normalMap = texelFetch(TEXTURE_0, ivec2((uv0 - localNormalCoord) * 1024.0), 0);", "")
Archive::Zip.archive("packBuild/OSBES11.mcpack", "packBuild/pack/.") # Light nether compatable mode
puts "Building compatable dark nether pack..."
replaceInFile('./packBuild/pack/shaders/glsl/renderchunk.fragment', "resultLighting += vec3(isHell * 0.4);", "resultLighting += vec3(isHell * 0.125);")
Archive::Zip.archive("packBuild/OSBES10.mcpack", "packBuild/pack/.") # Dark nether compatable mode
puts "Finishing pack build..."
FileUtils.rm_rf("packBuild/pack")
FileUtils.copy_entry("packBuild/", "BUILD/packs")
FileUtils.rm_rf("packBuild")

puts "\nCopying site base..."
FileUtils.copy_entry("siteBase/", "BUILD")
puts "\ndone."