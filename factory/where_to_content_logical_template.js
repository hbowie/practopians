<?output "../../../../../../Sites/practopians/js/where_to_content_logical.js" ?>

ix = 0;
<?nextrec?>
title = "=$content-title$="
if (title != "") {
  content_logical[ix] = new Page("=$section-title$=", "=$item-type$=", "=$post-date$=", "=$content-title$=", "", "=$path$==$content-title&f$=.html", "=$tags$=", "");
}
ix++;
<?loop?>


