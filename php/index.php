<?php
require "vendor/autoload.php";

ORM::configure('mysql:host=localhost;dbname=coin');
ORM::configure('username', 'root');
ORM::configure('password', '');

if ($_POST['route'] == 'top') {
    try {
        $result = ORM::for_table('top')->limit(10)->order_by_desc('score')->find_many();
        $answer = [];
        foreach ($result as $top) {
            $temp = [];
            $temp['name'] = $top->name;
            $temp['score'] = $top->score;
            $answer[] = $temp;
            unset($temp);
        }

        die(json_encode($answer));
    } catch (\Throwable $th) {
        die( false);
    }
}
if ($_POST['route'] == 'new') {
    try {
        $name = $_POST['name'];
        $score = $_POST['score'];
        $level = $_POST['level'];
        $count = $_POST['count'];

        $person = ORM::for_table('top')->create();
        $person->name = $name;
        $person->score = $score;
        $person->level = $level;
        $person->coin = $count;  // count take error in sql

        $person->save();
        die( json_encode(true ));
    } catch (\Throwable $th) {
        file_put_contents('log.log',var_export($th,true));
        die( json_encode(false));
    }
    
}

die(json_encode("Всё поломалось, зови админа"));