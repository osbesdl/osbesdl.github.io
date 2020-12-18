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

def file_edit(filename, regexp, replacement)
  tempdir = File.dirname(filename)
  tempprefix = File.basename(filename)
  tempprefix.prepend('.') unless RUBY_PLATFORM =~ /mswin|mingw|windows/
  tempfile =
    begin
      Tempfile.new(tempprefix, tempdir)
    rescue
      Tempfile.new(tempprefix)
    end
  File.open(filename).each do |line|
    tempfile.puts line.gsub(regexp, replacement)
  end
  tempfile.fdatasync unless RUBY_PLATFORM =~ /mswin|mingw|windows/
  tempfile.close
  unless RUBY_PLATFORM =~ /mswin|mingw|windows/
    stat = File.stat(filename)
    FileUtils.chown stat.uid, stat.gid, tempfile.path
    FileUtils.chmod stat.mode, tempfile.path
  else
    # FIXME: apply perms on windows
  end
  FileUtils.mv tempfile.path, filename
end

file_edit('/tmp/foo', /foo/, "baz")
createDir("packBuild")
createDir("BUILD")
createDir("BUILD/packs")

ZipDir("./packBase/", "packBuild/test.mcpack")
FileUtils.copy_entry("packBuild/", "BUILD/packs")
FileUtils.copy_entry("siteBase/", "BUILD")

FileUtils.rm_rf("packBuild")