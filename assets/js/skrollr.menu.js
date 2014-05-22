




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>skrollr-menu/src/skrollr.menu.js at master · Prinzhorn/skrollr-menu</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Prinzhorn/skrollr-menu" name="twitter:title" /><meta content="skrollr-menu - skrollr plugin for hash navigation" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/679144?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/679144?s=400" property="og:image" /><meta content="Prinzhorn/skrollr-menu" property="og:title" /><meta content="https://github.com/Prinzhorn/skrollr-menu" property="og:url" /><meta content="skrollr-menu - skrollr plugin for hash navigation" property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="88981E01:2483:69D251:53606CC8" name="octolytics-dimension-request_id" /><meta content="2917766" name="octolytics-actor-id" /><meta content="jasonjaacks" name="octolytics-actor-login" /><meta content="da407eac44cc656c2fda6ad76ccaa4be157189e2a4f59889603bf07a85564f92" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="YfNv86qbCcXEy5KKgzb1FaULSNFZEFhaBabnWEabgtInY8bailQIlgipQfq5E8lNdrbXZKCGBpfvgIe8/T+o4w==" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-f45fb66dfb4963c7e7b763c2604452a64299325d.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-c12d327a67f6ac929c27e1bb3c97922071001d7f.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-e2529f330405437c76612642f8170cd664cfa501.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-8ff300e5d6105b89f93dbbf13f891c0cce6c5130.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="85a796ce071481fb76aa05d8ca9c9b98">

        <link data-pjax-transient rel='permalink' href='/Prinzhorn/skrollr-menu/blob/5e335e5023c79997221844e51b3a540f400fa167/src/skrollr.menu.js'>

  <meta name="description" content="skrollr-menu - skrollr plugin for hash navigation" />

  <meta content="679144" name="octolytics-dimension-user_id" /><meta content="Prinzhorn" name="octolytics-dimension-user_login" /><meta content="10140791" name="octolytics-dimension-repository_id" /><meta content="Prinzhorn/skrollr-menu" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="10140791" name="octolytics-dimension-repository_network_root_id" /><meta content="Prinzhorn/skrollr-menu" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Prinzhorn/skrollr-menu/commits/master.atom" rel="alternate" title="Recent Commits to skrollr-menu:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="jasonjaacks"
      data-repo="Prinzhorn/skrollr-menu"
      data-branch="master"
      data-sha="18017565984d61e4f8539d97577720e097a93f33"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="Prinzhorn/skrollr-menu" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/jasonjaacks" class="name">
        <img alt="jasonjaacks" class=" js-avatar" data-user="2917766" height="20" src="https://avatars1.githubusercontent.com/u/2917766?s=140" width="20" /> jasonjaacks
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="Prinzhorn/skrollr-menu">This repository</span>
    </li>
      <li>
        <a href="/Prinzhorn/skrollr-menu/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="MRZSUPkwE8cWSWKVFVVhOKmUb8RWpRuf2a/VwTuj6MG/FZ+femcIYxMw1lPjzsd2WttHjLMo+11tm/Jg4J1HtA==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="10140791" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/Prinzhorn/skrollr-menu/watchers">
        14
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/Prinzhorn/skrollr-menu/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar Prinzhorn/skrollr-menu" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/Prinzhorn/skrollr-menu/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star Prinzhorn/skrollr-menu" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/Prinzhorn/skrollr-menu/stargazers">
        114
      </a>
  </div>

  </li>


        <li>
          <a href="/Prinzhorn/skrollr-menu/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of Prinzhorn/skrollr-menu to your account" aria-label="Fork your own copy of Prinzhorn/skrollr-menu to your account" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/Prinzhorn/skrollr-menu/network" class="social-count">72</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/Prinzhorn" class="url fn" itemprop="url" rel="author"><span itemprop="title">Prinzhorn</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/Prinzhorn/skrollr-menu" class="js-current-repository js-repo-home-link">skrollr-menu</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/Prinzhorn/skrollr-menu" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Prinzhorn/skrollr-menu">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/Prinzhorn/skrollr-menu/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /Prinzhorn/skrollr-menu/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>21</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/Prinzhorn/skrollr-menu/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /Prinzhorn/skrollr-menu/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>5</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/Prinzhorn/skrollr-menu/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /Prinzhorn/skrollr-menu/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/Prinzhorn/skrollr-menu/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /Prinzhorn/skrollr-menu/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/Prinzhorn/skrollr-menu/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /Prinzhorn/skrollr-menu/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/Prinzhorn/skrollr-menu.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/Prinzhorn/skrollr-menu.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:Prinzhorn/skrollr-menu.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:Prinzhorn/skrollr-menu.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/Prinzhorn/skrollr-menu" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/Prinzhorn/skrollr-menu" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/Prinzhorn/skrollr-menu" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save Prinzhorn/skrollr-menu to your computer and use it in GitHub Desktop." aria-label="Save Prinzhorn/skrollr-menu to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/Prinzhorn/skrollr-menu/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download Prinzhorn/skrollr-menu as a zip file"
                   title="Download Prinzhorn/skrollr-menu as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:42f7aead90e6a78ca83ca069c44bea7f -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/Prinzhorn/skrollr-menu/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/blob/gh-pages/src/skrollr.menu.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/blob/master/src/skrollr.menu.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/tree/0.1.11/src/skrollr.menu.js"
                 data-name="0.1.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.11">0.1.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/tree/0.1.10/src/skrollr.menu.js"
                 data-name="0.1.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.10">0.1.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/tree/0.1.9/src/skrollr.menu.js"
                 data-name="0.1.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.9">0.1.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/tree/0.1.8/src/skrollr.menu.js"
                 data-name="0.1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.8">0.1.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/tree/0.1.7/src/skrollr.menu.js"
                 data-name="0.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.7">0.1.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/tree/0.1.6/src/skrollr.menu.js"
                 data-name="0.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.6">0.1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/tree/0.1.5/src/skrollr.menu.js"
                 data-name="0.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.5">0.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/tree/0.1.4/src/skrollr.menu.js"
                 data-name="0.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.4">0.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/tree/0.1.3/src/skrollr.menu.js"
                 data-name="0.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.3">0.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/tree/0.1.2/src/skrollr.menu.js"
                 data-name="0.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.2">0.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Prinzhorn/skrollr-menu/tree/0.1.1/src/skrollr.menu.js"
                 data-name="0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.1">0.1.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Prinzhorn/skrollr-menu" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">skrollr-menu</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Prinzhorn/skrollr-menu/tree/master/src" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">skrollr.menu.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="src/skrollr.menu.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Alexander Prinzhorn" class="main-avatar js-avatar" data-user="679144" height="24" src="https://avatars1.githubusercontent.com/u/679144?s=140" width="24" />
    <span class="author"><a href="/Prinzhorn" rel="author">Prinzhorn</a></span>
    <local-time datetime="2014-03-14T08:02:38+01:00" from="now" title-format="%Y-%m-%d %H:%M:%S %z" title="2014-03-14 08:02:38 +0100">March 14, 2014</local-time>
    <div class="commit-title">
        <a href="/Prinzhorn/skrollr-menu/commit/334a4f1253a55d2901d038d7fd3555407c1681e9" class="message" data-pjax="true" title="refractor">refractor</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="Prinzhorn" href="/Prinzhorn/skrollr-menu/commits/master/src/skrollr.menu.js?author=Prinzhorn"><img alt="Alexander Prinzhorn" class=" js-avatar" data-user="679144" height="20" src="https://avatars1.githubusercontent.com/u/679144?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="SuPa86000" href="/Prinzhorn/skrollr-menu/commits/master/src/skrollr.menu.js?author=SuPa86000"><img alt="SuPa-Creation.com" class=" js-avatar" data-user="3159035" height="20" src="https://avatars3.githubusercontent.com/u/3159035?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="ydm" href="/Prinzhorn/skrollr-menu/commits/master/src/skrollr.menu.js?author=ydm"><img alt="Yordan Miladinov" class=" js-avatar" data-user="568909" height="20" src="https://avatars1.githubusercontent.com/u/568909?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="stianlik" href="/Prinzhorn/skrollr-menu/commits/master/src/skrollr.menu.js?author=stianlik"><img alt="Stian Liknes" class=" js-avatar" data-user="410251" height="20" src="https://avatars3.githubusercontent.com/u/410251?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Alexander Prinzhorn" class=" js-avatar" data-user="679144" height="24" src="https://avatars1.githubusercontent.com/u/679144?s=140" width="24" />
            <a href="/Prinzhorn">Prinzhorn</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="SuPa-Creation.com" class=" js-avatar" data-user="3159035" height="24" src="https://avatars3.githubusercontent.com/u/3159035?s=140" width="24" />
            <a href="/SuPa86000">SuPa86000</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Yordan Miladinov" class=" js-avatar" data-user="568909" height="24" src="https://avatars1.githubusercontent.com/u/568909?s=140" width="24" />
            <a href="/ydm">ydm</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Stian Liknes" class=" js-avatar" data-user="410251" height="24" src="https://avatars3.githubusercontent.com/u/410251?s=140" width="24" />
            <a href="/stianlik">stianlik</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>204 lines (166 sloc)</span>
          <span class="meta-divider"></span>
        <span>4.778 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/Prinzhorn/skrollr-menu?branch=master&amp;filepath=src%2Fskrollr.menu.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/Prinzhorn/skrollr-menu/edit/master/src/skrollr.menu.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/Prinzhorn/skrollr-menu/raw/master/src/skrollr.menu.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/Prinzhorn/skrollr-menu/blame/master/src/skrollr.menu.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/Prinzhorn/skrollr-menu/commits/master/src/skrollr.menu.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/Prinzhorn/skrollr-menu/delete/master/src/skrollr.menu.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'>&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * Plugin for skrollr.</span></div><div class='line' id='LC3'><span class="cm"> * This plugin makes hashlinks scroll nicely to their target position.</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr</span></div><div class='line' id='LC6'><span class="cm"> *</span></div><div class='line' id='LC7'><span class="cm"> * Free to use under terms of MIT license</span></div><div class='line' id='LC8'><span class="cm"> */</span></div><div class='line' id='LC9'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nb">window</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC10'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'>	<span class="kd">var</span> <span class="nx">DEFAULT_DURATION</span> <span class="o">=</span> <span class="mi">500</span><span class="p">;</span></div><div class='line' id='LC13'>	<span class="kd">var</span> <span class="nx">DEFAULT_EASING</span> <span class="o">=</span> <span class="s1">&#39;sqrt&#39;</span><span class="p">;</span></div><div class='line' id='LC14'>	<span class="kd">var</span> <span class="nx">DEFAULT_SCALE</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>	<span class="kd">var</span> <span class="nx">MENU_TOP_ATTR</span> <span class="o">=</span> <span class="s1">&#39;data-menu-top&#39;</span><span class="p">;</span></div><div class='line' id='LC17'>	<span class="kd">var</span> <span class="nx">MENU_OFFSET_ATTR</span> <span class="o">=</span> <span class="s1">&#39;data-menu-offset&#39;</span><span class="p">;</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'>	<span class="kd">var</span> <span class="nx">skrollr</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">skrollr</span><span class="p">;</span></div><div class='line' id='LC20'>	<span class="kd">var</span> <span class="nx">history</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">history</span><span class="p">;</span></div><div class='line' id='LC21'>	<span class="kd">var</span> <span class="nx">supportsHistory</span> <span class="o">=</span> <span class="o">!!</span><span class="nx">history</span><span class="p">.</span><span class="nx">pushState</span><span class="p">;</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>	<span class="cm">/*</span></div><div class='line' id='LC24'><span class="cm">		Since we are using event bubbling, the element that has been clicked</span></div><div class='line' id='LC25'><span class="cm">		might not acutally be the link but a child.</span></div><div class='line' id='LC26'><span class="cm">	*/</span></div><div class='line' id='LC27'>	<span class="kd">var</span> <span class="nx">findParentLink</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC28'>		<span class="c1">//We reached the top, no link found.</span></div><div class='line' id='LC29'>		<span class="k">if</span><span class="p">(</span><span class="nx">element</span> <span class="o">===</span> <span class="nb">document</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC31'>		<span class="p">}</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>		<span class="c1">//Yay, it&#39;s a link!</span></div><div class='line' id='LC34'>		<span class="k">if</span><span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">()</span> <span class="o">===</span> <span class="s1">&#39;A&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC35'>			<span class="k">return</span> <span class="nx">element</span><span class="p">;</span></div><div class='line' id='LC36'>		<span class="p">}</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>		<span class="c1">//Maybe the parent is a link.</span></div><div class='line' id='LC39'>		<span class="k">return</span> <span class="nx">findParentLink</span><span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">);</span></div><div class='line' id='LC40'>	<span class="p">};</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>	<span class="cm">/*</span></div><div class='line' id='LC43'><span class="cm">		Handle the click event on the document.</span></div><div class='line' id='LC44'><span class="cm">	*/</span></div><div class='line' id='LC45'>	<span class="kd">var</span> <span class="nx">handleClick</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC46'>		<span class="c1">//Only handle left click.</span></div><div class='line' id='LC47'>		<span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">which</span> <span class="o">!==</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">.</span><span class="nx">button</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC49'>		<span class="p">}</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>		<span class="kd">var</span> <span class="nx">link</span> <span class="o">=</span> <span class="nx">findParentLink</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>		<span class="c1">//The click did not happen inside a link.</span></div><div class='line' id='LC54'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">link</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC55'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC56'>		<span class="p">}</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>		<span class="k">if</span><span class="p">(</span><span class="nx">handleLink</span><span class="p">(</span><span class="nx">link</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC59'>			<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC60'>		<span class="p">}</span></div><div class='line' id='LC61'>	<span class="p">};</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'>	<span class="cm">/*</span></div><div class='line' id='LC64'><span class="cm">		Handles the click on a link. May be called without an actual click event.</span></div><div class='line' id='LC65'><span class="cm">		When the fake flag is set, the link won&#39;t change the url and the position won&#39;t be animated.</span></div><div class='line' id='LC66'><span class="cm">	*/</span></div><div class='line' id='LC67'>	<span class="kd">var</span> <span class="nx">handleLink</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">link</span><span class="p">,</span> <span class="nx">fake</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC68'>		<span class="c1">//Don&#39;t use the href property (link.href) because it contains the absolute url.</span></div><div class='line' id='LC69'>		<span class="kd">var</span> <span class="nx">href</span> <span class="o">=</span> <span class="nx">link</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">);</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>		<span class="c1">//Check if it&#39;s a hashlink.</span></div><div class='line' id='LC72'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="sr">/^#/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">href</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC73'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC74'>		<span class="p">}</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>		<span class="c1">//Now get the targetTop to scroll to.</span></div><div class='line' id='LC77'>		<span class="kd">var</span> <span class="nx">targetTop</span><span class="p">;</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>		<span class="kd">var</span> <span class="nx">menuTop</span><span class="p">;</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>		<span class="c1">//If there&#39;s a handleLink function, it overrides the actual anchor offset.</span></div><div class='line' id='LC82'>		<span class="k">if</span><span class="p">(</span><span class="nx">_handleLink</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>			<span class="nx">menuTop</span> <span class="o">=</span> <span class="nx">_handleLink</span><span class="p">(</span><span class="nx">link</span><span class="p">);</span></div><div class='line' id='LC84'>		<span class="p">}</span></div><div class='line' id='LC85'>		<span class="c1">//If there&#39;s a data-menu-top attribute and no handleLink function, it overrides the actual anchor offset.</span></div><div class='line' id='LC86'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC87'>			<span class="nx">menuTop</span> <span class="o">=</span> <span class="nx">link</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="nx">MENU_TOP_ATTR</span><span class="p">);</span></div><div class='line' id='LC88'>		<span class="p">}</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>		<span class="k">if</span><span class="p">(</span><span class="nx">menuTop</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>			<span class="c1">//Is it a percentage offset?</span></div><div class='line' id='LC92'>			<span class="k">if</span><span class="p">(</span><span class="sr">/p$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">menuTop</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC93'>				<span class="nx">targetTop</span> <span class="o">=</span> <span class="p">(</span><span class="nx">menuTop</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">)</span> <span class="o">*</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">clientHeight</span><span class="p">;</span></div><div class='line' id='LC94'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC95'>				<span class="nx">targetTop</span> <span class="o">=</span> <span class="o">+</span><span class="nx">menuTop</span> <span class="o">*</span> <span class="nx">_scale</span><span class="p">;</span></div><div class='line' id='LC96'>			<span class="p">}</span></div><div class='line' id='LC97'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC98'>			<span class="kd">var</span> <span class="nx">scrollTarget</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">href</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>			<span class="c1">//Ignore the click if no target is found.</span></div><div class='line' id='LC101'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">scrollTarget</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC102'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC103'>			<span class="p">}</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>			<span class="nx">targetTop</span> <span class="o">=</span> <span class="nx">_skrollrInstance</span><span class="p">.</span><span class="nx">relativeToAbsolute</span><span class="p">(</span><span class="nx">scrollTarget</span><span class="p">,</span> <span class="s1">&#39;top&#39;</span><span class="p">,</span> <span class="s1">&#39;top&#39;</span><span class="p">);</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>			<span class="kd">var</span> <span class="nx">menuOffset</span> <span class="o">=</span> <span class="nx">scrollTarget</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="nx">MENU_OFFSET_ATTR</span><span class="p">);</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>			<span class="k">if</span><span class="p">(</span><span class="nx">menuOffset</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC110'>				<span class="nx">targetTop</span> <span class="o">+=</span> <span class="o">+</span><span class="nx">menuOffset</span><span class="p">;</span></div><div class='line' id='LC111'>			<span class="p">}</span></div><div class='line' id='LC112'>		<span class="p">}</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'>		<span class="k">if</span><span class="p">(</span><span class="nx">supportsHistory</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">fake</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>			<span class="nx">history</span><span class="p">.</span><span class="nx">pushState</span><span class="p">({</span><span class="nx">top</span><span class="o">:</span> <span class="nx">targetTop</span><span class="p">},</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nx">href</span><span class="p">);</span></div><div class='line' id='LC116'>		<span class="p">}</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>		<span class="c1">//Now finally scroll there.</span></div><div class='line' id='LC119'>		<span class="k">if</span><span class="p">(</span><span class="nx">_animate</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">fake</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>			<span class="nx">_skrollrInstance</span><span class="p">.</span><span class="nx">animateTo</span><span class="p">(</span><span class="nx">targetTop</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC121'>				<span class="nx">duration</span><span class="o">:</span> <span class="nx">_duration</span><span class="p">(</span><span class="nx">_skrollrInstance</span><span class="p">.</span><span class="nx">getScrollTop</span><span class="p">(),</span> <span class="nx">targetTop</span><span class="p">),</span></div><div class='line' id='LC122'>				<span class="nx">easing</span><span class="o">:</span> <span class="nx">_easing</span></div><div class='line' id='LC123'>			<span class="p">});</span></div><div class='line' id='LC124'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC125'>			<span class="nx">defer</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC126'>				<span class="nx">_skrollrInstance</span><span class="p">.</span><span class="nx">setScrollTop</span><span class="p">(</span><span class="nx">targetTop</span><span class="p">);</span></div><div class='line' id='LC127'>			<span class="p">});</span></div><div class='line' id='LC128'>		<span class="p">}</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC131'>	<span class="p">};</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>	<span class="kd">var</span> <span class="nx">jumpStraightToHash</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC134'>		<span class="k">if</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span> <span class="o">&amp;&amp;</span> <span class="nb">document</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC135'>			<span class="kd">var</span> <span class="nx">link</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">(</span><span class="s1">&#39;a[href=&quot;&#39;</span> <span class="o">+</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">);</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'>			<span class="k">if</span><span class="p">(</span><span class="nx">link</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC138'>				<span class="nx">handleLink</span><span class="p">(</span><span class="nx">link</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC139'>			<span class="p">}</span></div><div class='line' id='LC140'>		<span class="p">}</span></div><div class='line' id='LC141'>	<span class="p">};</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>	<span class="kd">var</span> <span class="nx">defer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'>		<span class="nb">window</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC145'>	<span class="p">};</span></div><div class='line' id='LC146'><br/></div><div class='line' id='LC147'>	<span class="cm">/*</span></div><div class='line' id='LC148'><span class="cm">		Global menu function accessible through window.skrollr.menu.init.</span></div><div class='line' id='LC149'><span class="cm">	*/</span></div><div class='line' id='LC150'>	<span class="nx">skrollr</span><span class="p">.</span><span class="nx">menu</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC151'>	<span class="nx">skrollr</span><span class="p">.</span><span class="nx">menu</span><span class="p">.</span><span class="nx">init</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">skrollrInstance</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC152'>		<span class="nx">_skrollrInstance</span> <span class="o">=</span> <span class="nx">skrollrInstance</span><span class="p">;</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>		<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>		<span class="nx">_easing</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">easing</span> <span class="o">||</span> <span class="nx">DEFAULT_EASING</span><span class="p">;</span></div><div class='line' id='LC157'>		<span class="nx">_animate</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">animate</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC158'>		<span class="nx">_duration</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">duration</span> <span class="o">||</span> <span class="nx">DEFAULT_DURATION</span><span class="p">;</span></div><div class='line' id='LC159'>		<span class="nx">_handleLink</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">handleLink</span><span class="p">;</span></div><div class='line' id='LC160'>		<span class="nx">_scale</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">scale</span> <span class="o">||</span> <span class="nx">DEFAULT_SCALE</span><span class="p">;</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>		<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">_duration</span> <span class="o">===</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC163'>			<span class="nx">_duration</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">duration</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'>				<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC165'>					<span class="k">return</span> <span class="nx">duration</span><span class="p">;</span></div><div class='line' id='LC166'>				<span class="p">};</span></div><div class='line' id='LC167'>			<span class="p">}(</span><span class="nx">_duration</span><span class="p">));</span></div><div class='line' id='LC168'>		<span class="p">}</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>		<span class="c1">//Use event bubbling and attach a single listener to the document.</span></div><div class='line' id='LC171'>		<span class="nx">skrollr</span><span class="p">.</span><span class="nx">addEvent</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="nx">handleClick</span><span class="p">);</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'>		<span class="k">if</span><span class="p">(</span><span class="nx">supportsHistory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC174'>			<span class="nx">skrollr</span><span class="p">.</span><span class="nx">addEvent</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="s1">&#39;popstate&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC175'>				<span class="kd">var</span> <span class="nx">state</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">state</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC176'>				<span class="kd">var</span> <span class="nx">top</span> <span class="o">=</span> <span class="nx">state</span><span class="p">.</span><span class="nx">top</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'>				<span class="nx">defer</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC179'>					<span class="nx">_skrollrInstance</span><span class="p">.</span><span class="nx">setScrollTop</span><span class="p">(</span><span class="nx">top</span><span class="p">);</span></div><div class='line' id='LC180'>				<span class="p">});</span></div><div class='line' id='LC181'>			<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC182'>		<span class="p">}</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>		<span class="nx">jumpStraightToHash</span><span class="p">();</span></div><div class='line' id='LC185'>	<span class="p">};</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>	<span class="c1">//Private reference to the initialized skrollr.</span></div><div class='line' id='LC188'>	<span class="kd">var</span> <span class="nx">_skrollrInstance</span><span class="p">;</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'>	<span class="kd">var</span> <span class="nx">_easing</span><span class="p">;</span></div><div class='line' id='LC191'>	<span class="kd">var</span> <span class="nx">_duration</span><span class="p">;</span></div><div class='line' id='LC192'>	<span class="kd">var</span> <span class="nx">_animate</span><span class="p">;</span></div><div class='line' id='LC193'>	<span class="kd">var</span> <span class="nx">_handleLink</span><span class="p">;</span></div><div class='line' id='LC194'>	<span class="kd">var</span> <span class="nx">_scale</span><span class="p">;</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>	<span class="c1">//In case the page was opened with a hash, prevent jumping to it.</span></div><div class='line' id='LC197'>	<span class="c1">//http://stackoverflow.com/questions/3659072/jquery-disable-anchor-jump-when-loading-a-page</span></div><div class='line' id='LC198'>	<span class="nx">defer</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC199'>		<span class="k">if</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC200'>			<span class="nb">window</span><span class="p">.</span><span class="nx">scrollTo</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC201'>		<span class="p">}</span></div><div class='line' id='LC202'>	<span class="p">});</span></div><div class='line' id='LC203'><span class="p">}(</span><span class="nb">document</span><span class="p">,</span> <span class="nb">window</span><span class="p">));</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04444s from github-fe121-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

