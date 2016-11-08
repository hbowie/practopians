Introduction
------------

The practopians project is a collection of writings published on the web at practopians.com, home for the Society of Practical Utopians.

Tools
-----

In addition to the normal HTML and CSS, the practopians project makes use of the following languages and tools.

* Markdown -- Most content is written in Markdown syntax, sometimes extended using Multimarkdown/Notenik conventions.

* Notenik -- Used to edit and organize some of the content.

* iWisdom -- Used to maintain a collection of relevant quotations.

* PSTextMerge -- Used to generate the final html pages posted to the website.

Folders
-------

The practopians project is organized into the following folders.

* content -- The site provides several different types of content, and each type of content exists here within its respective subfolder.

	* blog -- Blog posts are organized by author.
	* core -- These are core writings that provide the basic definition of what it means to be a Practical Utopian.
	* intro -- Brief introductory notes.
	* issues -- Issues of particular importance to Practopians.
	* news -- Links to relevant news items, along with brief commentary.
	* tags -- Brief explanations for most of the tags used on the site.

* factory -- Contains the PSTextMerge templates used to generate the finished website.

* feed -- The files in this folder are transient files generated as part of the build process.

* html -- HTML fragments, mostly generated from Markdown content as part of the build process.

* includes -- PSTextMerge include files, some generated by the build process, others not so much.

* licenses -- A Creative Commons license governing the use of this project.

* lists -- Lists of content, including metadata. These lists are used as drivers to portions of the build process.

* nextnav -- The files in this folder are transient files generated as part of the build process.

* scripts -- Home for the PSTextMerge script file used to drive the bulk of the build process.

* web -- The website that is uploaded via FTP in order to publish the latest practopians changes to the Web.

Build Process
-------------

1. Update quotations using iWisdom.

2. Set iWisdom Tags Export Preferences as follows:
	* Tags to Select: Practopian
	* Tags to Suppress: America, Apple, Business, Lean, Management, Measurement, Pagan Tuna, Practopian, Reason to Rock

3. Use iWisdom to export All Fields of Entire Collection to a tab delimited text file named 'quotes.tab' in the lists folder.

4. Use PSTextMerge to play the script named 'practopians-gen.tcz' in the scripts folder.

Rights
------

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">Practopians</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.practopians.com/intro/about.html" property="cc:attributionName" rel="cc:attributionURL">Herb Bowie</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/hbowie/practopians" rel="dct:source">https://github.com/hbowie/practopians</a>.
