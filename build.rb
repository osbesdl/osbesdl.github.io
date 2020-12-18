require 'rubygems'
require 'zip/zip'
require 'dir'
require 'fileutils'

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

createDir("packBuild")
createDir("BUILD")
createDir("BUILD/packs")

ZipDir("./packBase/", "packBuild/test.mcpack")
FileUtils.copy_entry("packBuild/", "BUILD/packs")
FileUtils.copy_entry("siteBase/", "BUILD")

FileUtils.rm_rf("packBuild")