<?php
	session_start();
  
	include '../../includes/connect.inc.php';
	include '../../includes/include_connected.php'; // drawer

	if((!isset($_SESSION['id_user']))) {
		header ("location: ../../index.php");
	}
	
	/**  AFFICHE LE DETAIL D'UNE PERSONNE BASE SUR  URL GET */
	function afficheDetail($bdd){
		if ((isset($_SESSION['id_user'])) && (!empty($_SESSION['id_user'])) && (isset($_GET['id']))){
			$myid =  $_GET['id'];
			try { 

			//$select2 = $bdd->prepare("SELECT count(id_user), ip FROM log WHERE id_user=$myid");
			$select2 = $bdd->prepare("SELECT ip, COUNT(id_user) FROM log WHERE id_user=$myid GROUP BY ip ORDER BY ip");
			$select2->execute();
			$lignes2 = $select2->fetchAll();
			//var_dump($lignes2);
			$ipAndNbCon = " ";
			for($i = 0; $i < sizeof($lignes2) ; $i++){
			  $ipAndNbCon = $ipAndNbCon.'<ul class="demo-list-icon mdl-list"><li class="mdl-list__item"><span class="mdl-badge" data-badge="x'.$lignes2[$i][1].'">'.$lignes2[$i][0].'</span></li>';
			}
	  
			$select3 = $bdd->prepare("SELECT * from user WHERE id_user=$myid");
			$select3->execute();
			$lignes3 = $select3->fetchAll();
			
			echo '
			<div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
				<div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
				  <div class="mdl-card__title v2 mdl-card--expand mdl-color--blue-400">
					<h2 class="mdl-card__title-text">'.$lignes3[0]["pseudo"].'</h2>
				  </div>
				  <div class="mdl-card__supporting-text mdl-color-text--grey-600">
					<ul class="demo-list-icon mdl-list">
					  <li class="mdl-list__item">
						<span class="mdl-list__item-primary-content">
						<i class="material-icons mdl-list__item-icon">personn</i>
						'.$lignes3[0]["nom"].'  '.$lignes3[0]["prenom"].'
					</span>
					  </li>
					  <li class="mdl-list__item">
						<span class="mdl-list__item-primary-content">
						<i class="material-icons mdl-list__item-icon">mail</i>
								'.$lignes3[0]["email"].'
					  </span>
					  </li>

					  <li class="mdl-list__item">
						<span class="mdl-list__item-primary-content">
						<i class="material-icons mdl-list__item-icon">lock</i>
						***********
					  </span>
					  </li>

					  <li class="mdl-list__item">
						<span class="mdl-list__item-primary-content">
						<i class="material-icons mdl-list__item-icon">gps_fixed</i>
								'.$lignes3[0]["pays"].'
					  </span>
					  </li>
					   <li class="mdl-list__item">
						<span class="mdl-list__item-primary-content">
						<i class="material-icons mdl-list__item-icon">vpn_lock</i>
								'. $ipAndNbCon.'
					  </span>
					  </li>

					</ul>
				  </div>
				  <div class="mdl-card__actions mdl-card--border">
					<a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect"></a>
				  </div>
				</div>
				</div>
				';
		  } catch (Exception $e) { 
			  echo $e->errorMessage();
			  echo "->erreur";
		  } 
		}else{
		  echo '
		   <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
				<div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
				  <div class="mdl-card__title v2 mdl-card--expand mdl-color--grey-300">
					<h2 class="mdl-card__title-text">Détails</h2>
				  </div>
				  <div class="mdl-card__supporting-text mdl-color-text--grey-600">
					Selectionner une personne
				  </div>
				  <div class="mdl-card__actions mdl-card--border">
					<a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect">Connexion</a>
				  </div>
				</div>
				</div>
				';
		}
	}

	function afficheHistorique($bdd){
		if ((isset($_SESSION['id_user'])) && (!empty($_SESSION['id_user']))){
			$myid = $_SESSION['id_user'];
			try { 
			  //$select3 = $bdd->prepare("SELECT * FROM log");
			  $select3 = $bdd->prepare("select email, ip, connect_time, id_user from log group by id_user");
			  $select3->execute();
			  $lignes3 = $select3->fetchAll();


			  echo '
			  <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-grid mdl-grid--no-spacing">
				<div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop ">
				 <ul class="demo-list-icon mdl-list mdl-color--grey-300">
					<li class="mdl-list__item ">
					  <span class="mdl-list__item-primary-content">
						<i class="material-icons mdl-list__item-icon">info</i>
						Historique des connexions
					  </span>
					</li>
				  </ul><div id="" style="overflow-y: scroll; height:500px;">'; //debut scrool
				  for($i = 0; $i < sizeof($lignes3); $i++){
				  echo '     
				  <ul class="demo-list-three mdl-list">
							  <li class="mdl-list__item mdl-list__item--three-line">
								<span class="mdl-list__item-primary-content">
								  <i class="material-icons mdl-list__item-avatar">person</i>
								  <span>'.$lignes3[$i]["connect_time"].'</span>
								  <span class="mdl-list__item-text-body">
									'.$lignes3[$i]["ip"].'  '.$lignes3[$i]["email"].'
								  </span>
								</span>

								<span class="mdl-list__item-secondary-content">
								  <a class="mdl-list__item-secondary-action mdl-navigation__link" href="?id='.$lignes3[$i]["id_user"].'"><i class="material-icons">star</i></a>
								</span>
							  </li>
							</ul>
							';
				  } //fin for
			  echo ' </div> 
				</div>
			  </div>';
			  
		  } catch (Exception $e) { 
			  echo $e->errorMessage();
			  echo "->erreur";
		  }
		}
	}

	function afficheMesInfo($bdd){

		if ((isset($_SESSION['id_user'])) && (!empty($_SESSION['id_user']))){
			$myid = $_SESSION['id_user'];
			try { 
				//$select3 = $bdd->prepare("SELECT * FROM log");
				$select3 = $bdd->prepare("SELECT * from user WHERE id_user=$myid");
				$select3->execute();
				$lignes3 = $select3->fetchAll();
				
				echo '
				  <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
					<div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
					  <div class="mdl-card__title v3 mdl-card--expand mdl-color--orange-400">
						<h2 class="mdl-card__title-text">'.$lignes3[0]["pseudo"].'</h2>
					  </div>
					  <div class="mdl-card__supporting-text mdl-color-text--grey-600">

						<ul class="demo-list-icon mdl-list">
						  <li class="mdl-list__item">
							<span class="mdl-list__item-primary-content">
							<i class="material-icons mdl-list__item-icon">personn</i>
							'.$lignes3[0]["nom"].'  '.$lignes3[0]["prenom"].'
						</span>
						  </li>
						  <li class="mdl-list__item">
							<span class="mdl-list__item-primary-content">
							<i class="material-icons mdl-list__item-icon">mail</i>
									'.$lignes3[0]["email"].'
						  </span>
						  </li>

						  <li class="mdl-list__item">
							<span class="mdl-list__item-primary-content">
							<i class="material-icons mdl-list__item-icon">lock</i>
							***********
						  </span>
						  </li>

						  <li class="mdl-list__item">
							<span class="mdl-list__item-primary-content">
							<i class="material-icons mdl-list__item-icon">gps_fixed</i>
									'.$lignes3[0]["pays"].'
						  </span>
						  </li>

						</ul>
					  </div>
					  <div class="mdl-card__actions mdl-card--border">
						<a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect">Modifier</a>
					  </div>
					</div>
				  </div>
					';
			  } catch (Exception $e) { 
				  echo $e->errorMessage();
				  echo "->erreur";
			  } 
			}else{
			  echo '
				  <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
					<div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
					  <div class="mdl-card__title v2 mdl-card--expand mdl-color--grey-300">
						<h2 class="mdl-card__title-text">Hors Connexion</h2>
					  </div>
					  <div class="mdl-card__supporting-text mdl-color-text--grey-600">
						Veuillez vous connecter
					  </div>
					  <div class="mdl-card__actions mdl-card--border">
						<a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect">Connexion</a>
					  </div>
					</div>
				  </div>
					';
			}
	}
?>
<!--
  Material Design Lite
  Copyright 2015 Google Inc. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      https://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License
-->
<!DOCTYPE html>

<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Une plateforme pour apprendre gratuitement des cours d'ingénieur à l'ISEN.">

  <meta property="og:title" content="Mooc Isen">
  <meta property="og:image" content="">
  <meta property="og:url" content="http://colombies.com/app">
  <meta property="og:description" content="Une plateforme pour apprendre gratuitement des cours d'ingénieur à l'ISEN.">
  <meta property="robots" content="">
  
  <!-- Title -->
  <title>Admin | Mooc Isen</title>    
   
  <!-- favicon.ico -->
  <link rel="shortcut icon" href="../../favicon.ico">

  <!-- Disable tap highlight on IE -->
  <meta name="msapplication-tap-highlight" content="no">

  <!-- Web Application Manifest -->
  <link rel="manifest" href="../../manifest.json">

  <!-- Add to homescreen for Chrome on Android -->
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="application-name" content="Mooc Isen">
  <link rel="icon" sizes="192x192" href="../../images/touch/chrome-touch-icon-192x192.png">

  <!-- Add to homescreen for Safari on iOS -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="Mooc Isen">
  <link rel="apple-touch-icon" href="../../images/touch/apple-touch-icon.png">

  <!-- Tile icon for Win8 (144x144 + tile color) -->
  <meta name="msapplication-TileImage" content="../../images/touch/ms-touch-icon-144x144-precomposed.png">
  <meta name="msapplication-TileColor" content="#457871">

  <!-- Color the status bar on mobile devices -->
  <meta name="theme-color" content="#457871">

  <!-- Material Design Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">

  <!-- Material Design Icons -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

  <!-- Material Design Lite -->
  <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.cyan-light_blue.min.css">

  <!-- Your styles -->
  <link rel="stylesheet" href="../../styles/connected/admin.css">
  <style>
    #view-source {
      position: fixed;
      display: block;
      right: 0;
      bottom: 0;
      margin-right: 40px;
      margin-bottom: 40px;
      z-index: 900;
    }
  </style>
</head>
<body>
    <!-- header -->
    <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
		<header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
			<div class="mdl-layout__header-row">
				<span class="mdl-layout-title">Admin</span>
				<div class="mdl-layout-spacer"></div>
				<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
					<label class="mdl-button mdl-js-button mdl-button--icon" for="search">
						<i class="material-icons">search</i>
					</label>
					<div class="mdl-textfield__expandable-holder">
						<input class="search mdl-textfield__input" type="text" id="search" onkeyup="filter()">
						<label class="mdl-textfield__label" for="search">Rechercher...</label>
					</div>
				</div>
				<button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
					<i class="material-icons">more_vert</i>
				</button>
				<ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
					<li class="mdl-menu__item"><a style="text-decoration: none; color: grey;" href="aPropos.php">A propos</a></li>
					<li class="mdl-menu__item"><a style="text-decoration: none; color: grey;" href="contact.php">Contact</a></li>
					<li class="mdl-menu__item"><a style="text-decoration: none; color: grey;" href="legales.php">Modalités</a></li>
				</ul>
			</div>
		</header>
	  
		<div class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
			<?php 
				afficheMyProfilHeader($bdd);//viens de include_connected.php  drawer de gauche
				afficheMyNavLink();//viens de include_connected.php drawer de gauche
			?>
		</div>
		
		<main class="mdl-layout__content mdl-color--grey-100">
			<div class="mdl-grid ">
              <?php 
				afficheMesInfo($bdd);
                afficheHistorique($bdd);
                afficheDetail($bdd);
              ?>
      
		<!-- snackbar -->
				<div aria-live="assertive" aria-atomic="true" aria-relevant="text" class="mdl-snackbar mdl-js-snackbar">
					<div class="mdl-snackbar__text"></div>
					<button type="button" class="mdl-snackbar__action"></button>
				</div>
			</div>
		</main>
    </div>

     <!-- jQuery -->
    <script src="../../assets/js/jquery.js"></script>

    <!-- chart js -->
    <script src="../../assets/js/chartjs/Chart.js"></script>
	
	<!-- Material Design lite -->
    <script src="../../scripts/material.min.js"></script>
	
	<!-- Custom Theme JavaScript -->
    <script src="../../scripts/connected/admin.js"></script>


    <!-- Custom Theme JavaScript -->
    <script src="../../scripts/catch_error.js"></script>
	
	<!-- Google Analytics: change UA-XXXXX-X to be your site's ID -->
	<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXX-X', 'auto');
		ga('send', 'pageview');
	</script>
</body>
</html>
