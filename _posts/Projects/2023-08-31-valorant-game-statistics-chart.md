---
toc: true
comments: true
layout: default
title: Valorant Statistics
description: The statistics for all the competitive valorant games I play
type: hacks
courses: { timebox: {week: 2} }
---

# <span style="color: #8c2fc2;">Valorant Competitive Statistics</span>

<head>
    <!-- load jQuery and DataTables output style and scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>var define = null;</script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
</head>

<style>
    .table {
        color: #eeeeee;
    }
    th {
        color: #dddddd;
    }

    * {
        color: #dddddd;
     }
</style>
<!-- Body contains the contents of the Document -->
<body>
    <table id="demo" class="table">
        <thead>
            <tr>
                <th>Map</th>
                <th>Agent</th>
                <th>K/D</th>
                <th>Leaderboard Place</th>
                <th><span style="color: #34e00d;">Win</span> or <span style="color: #d92323;">Loss</span></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Split</td>
                <td>Jett</td>
                <td>0.7</td>
                <td>8th</td>
                <td><span style="color: #d92323;"><span style="color: #d92323;">Loss</span></span></td>
            </tr>
            <tr>
                <td>Bind</td>
                <td>Jett</td>
                <td>1.9</td>
                <td><span style="color: #f5e90a;">MVP</span></td>
                <td><span style="color: #34e00d;">Win</span></td>
            </tr>
            <tr>
                <td>Ascent</td>
                <td>Jett</td>
                <td>0.6</td>
                <td>9th</td>
                <td><span style="color: #d92323;">Loss</span></td>
            </tr>
            <tr>
                <td>Haven</td>
                <td>Jett</td>
                <td>1.2</td>
                <td>7th</td>
                <td><span style="color: #34e00d;">Win</span></td>
            </tr>
            <tr>
                <td>Haven</td>
                <td>Jett</td>
                <td>0.9</td>
                <td>3rd</td>
                <td><span style="color: #d92323;">Loss</span></td>
            </tr>
            <tr>
                <td>Fracture</td>
                <td>Jett</td>
                <td>0.9</td>
                <td>6th</td>
                <td><span style="color: #d92323;">Loss</span></td>
            </tr>
            <tr>
                <td>Ascent</td>
                <td>Jett</td>
                <td>1.1</td>
                <td>3rd</td>
                <td><span style="color: #34e00d;">Win</span></td>
            </tr>
            <tr>
                <td>Bind</td>
                <td>Jett</td>
                <td>2.8</td>
                <td><span style="color: #f5e90a;">MVP</span></td>
                <td><span style="color: #34e00d;">Win</span></td>
            </tr>
            <tr>
                <td>Ascent</td>
                <td>Jett</td>
                <td>1.1</td>
                <td>3rd</td>
                <td><span style="color: #34e00d;">Win</span></td>
            </tr>
            <tr>
                <td>Lotus</td>
                <td>Jett</td>
                <td>2.1</td>
                <td><span style="color: #f5e90a;">MVP</span></td>
                <td><span style="color: #34e00d;">Win</span></td>
            </tr>
            <tr>
                <td>Pearl</td>
                <td>Jett</td>
                <td>1.2</td>
                <td>9th</td>
                <td><span style="color: #34e00d;">Win</span></td>
            </tr>
        </tbody>
    </table>
</body>

<!-- Script is used to embed executable code -->
<script>
    $("#demo").DataTable();
</script>