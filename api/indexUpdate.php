<?php

require __DIR__ . '/vendor/autoload.php';
// $demo = \Algolia\AlgoliaSearch\Log\DebugLogger::enable(); 
$client = \Algolia\AlgoliaSearch\SearchClient::create(
   '9V4M3BO2Z4',
   'dd1924d20e515d93102e66e25235e0a2'
 );


$index_en = $client->initIndex('d365_english_content');
$index_ja = $client->initIndex('d365_japanese_content');
$records = json_decode(file_get_contents('https://www.andaze.com/ja/dynamics365/algolia.json'), true);

$en_result = array_filter($records, function ($item) {
  if (stripos($item['lang'], 'en' ) !== false) {
      return true;
  }
  return false;
});

$ja_result = array_filter($records, function ($item) {
  if (stripos($item['lang'], 'ja' ) !== false) {
      return true;
  }
  return false;
});

$index_en->saveObjects($en_result, ['autoGenerateObjectIDIfNotExist' => true]);
$index_ja->saveObjects($ja_result, ['autoGenerateObjectIDIfNotExist' => true]);
?>