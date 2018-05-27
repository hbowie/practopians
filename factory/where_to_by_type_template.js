<?output "../web/js/where_to_by_type.js" ?>

ix = 0;
<?nextrec?>
link = "=$link$=";
if (link != "") {
  pages_by_type[ix] = new Page("=$section$=", "=$type$=", "=$date$=", "=$title$=", "=$author$=", "=$link$=");
}
ix++;
<?loop?>

