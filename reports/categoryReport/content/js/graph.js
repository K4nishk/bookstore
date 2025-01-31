/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 13.0, "minX": 0.0, "maxY": 1696.0, "series": [{"data": [[0.0, 13.0], [0.1, 15.0], [0.2, 15.0], [0.3, 16.0], [0.4, 16.0], [0.5, 16.0], [0.6, 17.0], [0.7, 17.0], [0.8, 17.0], [0.9, 17.0], [1.0, 17.0], [1.1, 18.0], [1.2, 18.0], [1.3, 18.0], [1.4, 18.0], [1.5, 18.0], [1.6, 19.0], [1.7, 19.0], [1.8, 19.0], [1.9, 19.0], [2.0, 20.0], [2.1, 20.0], [2.2, 20.0], [2.3, 20.0], [2.4, 21.0], [2.5, 21.0], [2.6, 22.0], [2.7, 22.0], [2.8, 23.0], [2.9, 23.0], [3.0, 24.0], [3.1, 24.0], [3.2, 25.0], [3.3, 25.0], [3.4, 25.0], [3.5, 26.0], [3.6, 26.0], [3.7, 27.0], [3.8, 27.0], [3.9, 27.0], [4.0, 27.0], [4.1, 28.0], [4.2, 28.0], [4.3, 28.0], [4.4, 28.0], [4.5, 29.0], [4.6, 29.0], [4.7, 29.0], [4.8, 29.0], [4.9, 29.0], [5.0, 30.0], [5.1, 30.0], [5.2, 30.0], [5.3, 30.0], [5.4, 30.0], [5.5, 31.0], [5.6, 31.0], [5.7, 31.0], [5.8, 31.0], [5.9, 31.0], [6.0, 32.0], [6.1, 32.0], [6.2, 32.0], [6.3, 32.0], [6.4, 32.0], [6.5, 32.0], [6.6, 32.0], [6.7, 33.0], [6.8, 33.0], [6.9, 33.0], [7.0, 33.0], [7.1, 33.0], [7.2, 33.0], [7.3, 34.0], [7.4, 34.0], [7.5, 34.0], [7.6, 34.0], [7.7, 34.0], [7.8, 34.0], [7.9, 34.0], [8.0, 34.0], [8.1, 34.0], [8.2, 35.0], [8.3, 35.0], [8.4, 35.0], [8.5, 35.0], [8.6, 35.0], [8.7, 35.0], [8.8, 35.0], [8.9, 35.0], [9.0, 36.0], [9.1, 36.0], [9.2, 36.0], [9.3, 36.0], [9.4, 36.0], [9.5, 36.0], [9.6, 36.0], [9.7, 36.0], [9.8, 36.0], [9.9, 37.0], [10.0, 37.0], [10.1, 37.0], [10.2, 37.0], [10.3, 37.0], [10.4, 37.0], [10.5, 37.0], [10.6, 37.0], [10.7, 37.0], [10.8, 37.0], [10.9, 37.0], [11.0, 38.0], [11.1, 38.0], [11.2, 38.0], [11.3, 38.0], [11.4, 38.0], [11.5, 38.0], [11.6, 38.0], [11.7, 38.0], [11.8, 38.0], [11.9, 38.0], [12.0, 38.0], [12.1, 38.0], [12.2, 38.0], [12.3, 39.0], [12.4, 39.0], [12.5, 39.0], [12.6, 39.0], [12.7, 39.0], [12.8, 39.0], [12.9, 39.0], [13.0, 39.0], [13.1, 39.0], [13.2, 39.0], [13.3, 39.0], [13.4, 39.0], [13.5, 39.0], [13.6, 40.0], [13.7, 40.0], [13.8, 40.0], [13.9, 40.0], [14.0, 40.0], [14.1, 40.0], [14.2, 40.0], [14.3, 40.0], [14.4, 40.0], [14.5, 40.0], [14.6, 40.0], [14.7, 41.0], [14.8, 41.0], [14.9, 41.0], [15.0, 41.0], [15.1, 41.0], [15.2, 41.0], [15.3, 41.0], [15.4, 41.0], [15.5, 41.0], [15.6, 41.0], [15.7, 41.0], [15.8, 41.0], [15.9, 41.0], [16.0, 41.0], [16.1, 42.0], [16.2, 42.0], [16.3, 42.0], [16.4, 42.0], [16.5, 42.0], [16.6, 42.0], [16.7, 42.0], [16.8, 42.0], [16.9, 42.0], [17.0, 42.0], [17.1, 42.0], [17.2, 43.0], [17.3, 43.0], [17.4, 43.0], [17.5, 43.0], [17.6, 43.0], [17.7, 43.0], [17.8, 43.0], [17.9, 43.0], [18.0, 43.0], [18.1, 43.0], [18.2, 43.0], [18.3, 43.0], [18.4, 43.0], [18.5, 44.0], [18.6, 44.0], [18.7, 44.0], [18.8, 44.0], [18.9, 44.0], [19.0, 44.0], [19.1, 44.0], [19.2, 44.0], [19.3, 44.0], [19.4, 44.0], [19.5, 44.0], [19.6, 44.0], [19.7, 45.0], [19.8, 45.0], [19.9, 45.0], [20.0, 45.0], [20.1, 45.0], [20.2, 45.0], [20.3, 45.0], [20.4, 45.0], [20.5, 45.0], [20.6, 45.0], [20.7, 45.0], [20.8, 45.0], [20.9, 46.0], [21.0, 46.0], [21.1, 46.0], [21.2, 46.0], [21.3, 46.0], [21.4, 46.0], [21.5, 46.0], [21.6, 46.0], [21.7, 46.0], [21.8, 46.0], [21.9, 46.0], [22.0, 46.0], [22.1, 46.0], [22.2, 47.0], [22.3, 47.0], [22.4, 47.0], [22.5, 47.0], [22.6, 47.0], [22.7, 47.0], [22.8, 47.0], [22.9, 47.0], [23.0, 47.0], [23.1, 47.0], [23.2, 47.0], [23.3, 47.0], [23.4, 48.0], [23.5, 48.0], [23.6, 48.0], [23.7, 48.0], [23.8, 48.0], [23.9, 48.0], [24.0, 48.0], [24.1, 48.0], [24.2, 48.0], [24.3, 48.0], [24.4, 49.0], [24.5, 49.0], [24.6, 49.0], [24.7, 49.0], [24.8, 49.0], [24.9, 49.0], [25.0, 49.0], [25.1, 49.0], [25.2, 49.0], [25.3, 49.0], [25.4, 49.0], [25.5, 49.0], [25.6, 50.0], [25.7, 50.0], [25.8, 50.0], [25.9, 50.0], [26.0, 50.0], [26.1, 50.0], [26.2, 50.0], [26.3, 50.0], [26.4, 50.0], [26.5, 50.0], [26.6, 50.0], [26.7, 51.0], [26.8, 51.0], [26.9, 51.0], [27.0, 51.0], [27.1, 51.0], [27.2, 51.0], [27.3, 51.0], [27.4, 51.0], [27.5, 51.0], [27.6, 52.0], [27.7, 52.0], [27.8, 52.0], [27.9, 52.0], [28.0, 52.0], [28.1, 52.0], [28.2, 52.0], [28.3, 52.0], [28.4, 52.0], [28.5, 53.0], [28.6, 53.0], [28.7, 53.0], [28.8, 53.0], [28.9, 53.0], [29.0, 53.0], [29.1, 53.0], [29.2, 53.0], [29.3, 53.0], [29.4, 54.0], [29.5, 54.0], [29.6, 54.0], [29.7, 54.0], [29.8, 54.0], [29.9, 54.0], [30.0, 54.0], [30.1, 54.0], [30.2, 54.0], [30.3, 55.0], [30.4, 55.0], [30.5, 55.0], [30.6, 55.0], [30.7, 55.0], [30.8, 55.0], [30.9, 55.0], [31.0, 55.0], [31.1, 56.0], [31.2, 56.0], [31.3, 56.0], [31.4, 56.0], [31.5, 56.0], [31.6, 56.0], [31.7, 56.0], [31.8, 57.0], [31.9, 57.0], [32.0, 57.0], [32.1, 57.0], [32.2, 57.0], [32.3, 57.0], [32.4, 57.0], [32.5, 58.0], [32.6, 58.0], [32.7, 58.0], [32.8, 58.0], [32.9, 58.0], [33.0, 58.0], [33.1, 59.0], [33.2, 59.0], [33.3, 59.0], [33.4, 59.0], [33.5, 59.0], [33.6, 59.0], [33.7, 60.0], [33.8, 60.0], [33.9, 60.0], [34.0, 60.0], [34.1, 61.0], [34.2, 61.0], [34.3, 61.0], [34.4, 61.0], [34.5, 61.0], [34.6, 62.0], [34.7, 62.0], [34.8, 62.0], [34.9, 62.0], [35.0, 62.0], [35.1, 62.0], [35.2, 63.0], [35.3, 63.0], [35.4, 63.0], [35.5, 63.0], [35.6, 63.0], [35.7, 64.0], [35.8, 64.0], [35.9, 64.0], [36.0, 64.0], [36.1, 64.0], [36.2, 65.0], [36.3, 65.0], [36.4, 65.0], [36.5, 65.0], [36.6, 66.0], [36.7, 66.0], [36.8, 66.0], [36.9, 67.0], [37.0, 67.0], [37.1, 67.0], [37.2, 67.0], [37.3, 68.0], [37.4, 68.0], [37.5, 68.0], [37.6, 69.0], [37.7, 69.0], [37.8, 69.0], [37.9, 70.0], [38.0, 70.0], [38.1, 70.0], [38.2, 71.0], [38.3, 71.0], [38.4, 71.0], [38.5, 72.0], [38.6, 72.0], [38.7, 72.0], [38.8, 73.0], [38.9, 73.0], [39.0, 73.0], [39.1, 74.0], [39.2, 74.0], [39.3, 74.0], [39.4, 75.0], [39.5, 75.0], [39.6, 76.0], [39.7, 76.0], [39.8, 77.0], [39.9, 77.0], [40.0, 77.0], [40.1, 77.0], [40.2, 78.0], [40.3, 78.0], [40.4, 79.0], [40.5, 79.0], [40.6, 79.0], [40.7, 80.0], [40.8, 80.0], [40.9, 80.0], [41.0, 81.0], [41.1, 81.0], [41.2, 82.0], [41.3, 82.0], [41.4, 82.0], [41.5, 83.0], [41.6, 83.0], [41.7, 83.0], [41.8, 84.0], [41.9, 84.0], [42.0, 84.0], [42.1, 85.0], [42.2, 85.0], [42.3, 85.0], [42.4, 86.0], [42.5, 86.0], [42.6, 86.0], [42.7, 87.0], [42.8, 87.0], [42.9, 87.0], [43.0, 87.0], [43.1, 88.0], [43.2, 88.0], [43.3, 88.0], [43.4, 89.0], [43.5, 89.0], [43.6, 89.0], [43.7, 90.0], [43.8, 90.0], [43.9, 91.0], [44.0, 91.0], [44.1, 91.0], [44.2, 92.0], [44.3, 92.0], [44.4, 92.0], [44.5, 93.0], [44.6, 93.0], [44.7, 93.0], [44.8, 94.0], [44.9, 94.0], [45.0, 94.0], [45.1, 95.0], [45.2, 95.0], [45.3, 95.0], [45.4, 96.0], [45.5, 96.0], [45.6, 96.0], [45.7, 97.0], [45.8, 97.0], [45.9, 97.0], [46.0, 98.0], [46.1, 98.0], [46.2, 98.0], [46.3, 99.0], [46.4, 99.0], [46.5, 99.0], [46.6, 99.0], [46.7, 100.0], [46.8, 100.0], [46.9, 100.0], [47.0, 100.0], [47.1, 101.0], [47.2, 101.0], [47.3, 102.0], [47.4, 102.0], [47.5, 102.0], [47.6, 103.0], [47.7, 103.0], [47.8, 103.0], [47.9, 104.0], [48.0, 104.0], [48.1, 105.0], [48.2, 105.0], [48.3, 105.0], [48.4, 106.0], [48.5, 106.0], [48.6, 107.0], [48.7, 107.0], [48.8, 107.0], [48.9, 108.0], [49.0, 108.0], [49.1, 109.0], [49.2, 109.0], [49.3, 109.0], [49.4, 110.0], [49.5, 110.0], [49.6, 111.0], [49.7, 111.0], [49.8, 111.0], [49.9, 111.0], [50.0, 112.0], [50.1, 112.0], [50.2, 112.0], [50.3, 113.0], [50.4, 113.0], [50.5, 114.0], [50.6, 114.0], [50.7, 114.0], [50.8, 115.0], [50.9, 115.0], [51.0, 116.0], [51.1, 116.0], [51.2, 116.0], [51.3, 116.0], [51.4, 117.0], [51.5, 117.0], [51.6, 117.0], [51.7, 118.0], [51.8, 118.0], [51.9, 118.0], [52.0, 119.0], [52.1, 119.0], [52.2, 119.0], [52.3, 120.0], [52.4, 120.0], [52.5, 120.0], [52.6, 121.0], [52.7, 121.0], [52.8, 122.0], [52.9, 122.0], [53.0, 122.0], [53.1, 123.0], [53.2, 123.0], [53.3, 123.0], [53.4, 124.0], [53.5, 124.0], [53.6, 124.0], [53.7, 125.0], [53.8, 125.0], [53.9, 125.0], [54.0, 126.0], [54.1, 126.0], [54.2, 126.0], [54.3, 127.0], [54.4, 127.0], [54.5, 128.0], [54.6, 128.0], [54.7, 128.0], [54.8, 129.0], [54.9, 129.0], [55.0, 129.0], [55.1, 130.0], [55.2, 130.0], [55.3, 130.0], [55.4, 131.0], [55.5, 131.0], [55.6, 131.0], [55.7, 132.0], [55.8, 132.0], [55.9, 132.0], [56.0, 133.0], [56.1, 133.0], [56.2, 133.0], [56.3, 134.0], [56.4, 134.0], [56.5, 134.0], [56.6, 134.0], [56.7, 135.0], [56.8, 135.0], [56.9, 135.0], [57.0, 136.0], [57.1, 136.0], [57.2, 136.0], [57.3, 137.0], [57.4, 137.0], [57.5, 137.0], [57.6, 138.0], [57.7, 138.0], [57.8, 139.0], [57.9, 139.0], [58.0, 139.0], [58.1, 140.0], [58.2, 140.0], [58.3, 140.0], [58.4, 141.0], [58.5, 141.0], [58.6, 141.0], [58.7, 142.0], [58.8, 142.0], [58.9, 142.0], [59.0, 143.0], [59.1, 143.0], [59.2, 143.0], [59.3, 144.0], [59.4, 144.0], [59.5, 144.0], [59.6, 145.0], [59.7, 145.0], [59.8, 145.0], [59.9, 146.0], [60.0, 146.0], [60.1, 147.0], [60.2, 147.0], [60.3, 147.0], [60.4, 147.0], [60.5, 148.0], [60.6, 148.0], [60.7, 148.0], [60.8, 149.0], [60.9, 149.0], [61.0, 149.0], [61.1, 150.0], [61.2, 150.0], [61.3, 150.0], [61.4, 151.0], [61.5, 151.0], [61.6, 151.0], [61.7, 152.0], [61.8, 152.0], [61.9, 152.0], [62.0, 153.0], [62.1, 153.0], [62.2, 153.0], [62.3, 154.0], [62.4, 154.0], [62.5, 154.0], [62.6, 155.0], [62.7, 155.0], [62.8, 155.0], [62.9, 156.0], [63.0, 156.0], [63.1, 156.0], [63.2, 157.0], [63.3, 157.0], [63.4, 158.0], [63.5, 158.0], [63.6, 158.0], [63.7, 159.0], [63.8, 159.0], [63.9, 160.0], [64.0, 160.0], [64.1, 160.0], [64.2, 161.0], [64.3, 161.0], [64.4, 161.0], [64.5, 162.0], [64.6, 162.0], [64.7, 162.0], [64.8, 163.0], [64.9, 163.0], [65.0, 164.0], [65.1, 164.0], [65.2, 164.0], [65.3, 165.0], [65.4, 165.0], [65.5, 165.0], [65.6, 166.0], [65.7, 166.0], [65.8, 167.0], [65.9, 167.0], [66.0, 167.0], [66.1, 168.0], [66.2, 168.0], [66.3, 169.0], [66.4, 169.0], [66.5, 169.0], [66.6, 170.0], [66.7, 170.0], [66.8, 171.0], [66.9, 171.0], [67.0, 171.0], [67.1, 172.0], [67.2, 172.0], [67.3, 172.0], [67.4, 173.0], [67.5, 173.0], [67.6, 173.0], [67.7, 174.0], [67.8, 174.0], [67.9, 175.0], [68.0, 175.0], [68.1, 175.0], [68.2, 176.0], [68.3, 176.0], [68.4, 176.0], [68.5, 177.0], [68.6, 177.0], [68.7, 178.0], [68.8, 178.0], [68.9, 178.0], [69.0, 179.0], [69.1, 179.0], [69.2, 180.0], [69.3, 180.0], [69.4, 181.0], [69.5, 181.0], [69.6, 182.0], [69.7, 182.0], [69.8, 183.0], [69.9, 183.0], [70.0, 184.0], [70.1, 184.0], [70.2, 185.0], [70.3, 185.0], [70.4, 185.0], [70.5, 186.0], [70.6, 186.0], [70.7, 187.0], [70.8, 187.0], [70.9, 188.0], [71.0, 188.0], [71.1, 188.0], [71.2, 189.0], [71.3, 189.0], [71.4, 190.0], [71.5, 190.0], [71.6, 191.0], [71.7, 191.0], [71.8, 192.0], [71.9, 192.0], [72.0, 192.0], [72.1, 193.0], [72.2, 193.0], [72.3, 194.0], [72.4, 194.0], [72.5, 194.0], [72.6, 195.0], [72.7, 195.0], [72.8, 196.0], [72.9, 196.0], [73.0, 197.0], [73.1, 198.0], [73.2, 198.0], [73.3, 198.0], [73.4, 199.0], [73.5, 199.0], [73.6, 200.0], [73.7, 200.0], [73.8, 201.0], [73.9, 202.0], [74.0, 202.0], [74.1, 203.0], [74.2, 203.0], [74.3, 204.0], [74.4, 204.0], [74.5, 205.0], [74.6, 205.0], [74.7, 205.0], [74.8, 206.0], [74.9, 206.0], [75.0, 207.0], [75.1, 207.0], [75.2, 208.0], [75.3, 208.0], [75.4, 209.0], [75.5, 209.0], [75.6, 210.0], [75.7, 210.0], [75.8, 211.0], [75.9, 211.0], [76.0, 212.0], [76.1, 213.0], [76.2, 213.0], [76.3, 214.0], [76.4, 214.0], [76.5, 215.0], [76.6, 215.0], [76.7, 216.0], [76.8, 217.0], [76.9, 218.0], [77.0, 218.0], [77.1, 219.0], [77.2, 220.0], [77.3, 220.0], [77.4, 221.0], [77.5, 222.0], [77.6, 222.0], [77.7, 223.0], [77.8, 224.0], [77.9, 225.0], [78.0, 225.0], [78.1, 226.0], [78.2, 227.0], [78.3, 228.0], [78.4, 228.0], [78.5, 229.0], [78.6, 230.0], [78.7, 231.0], [78.8, 231.0], [78.9, 232.0], [79.0, 232.0], [79.1, 233.0], [79.2, 234.0], [79.3, 235.0], [79.4, 236.0], [79.5, 237.0], [79.6, 237.0], [79.7, 238.0], [79.8, 239.0], [79.9, 240.0], [80.0, 241.0], [80.1, 242.0], [80.2, 243.0], [80.3, 244.0], [80.4, 245.0], [80.5, 247.0], [80.6, 248.0], [80.7, 249.0], [80.8, 250.0], [80.9, 252.0], [81.0, 253.0], [81.1, 254.0], [81.2, 255.0], [81.3, 256.0], [81.4, 257.0], [81.5, 258.0], [81.6, 259.0], [81.7, 261.0], [81.8, 262.0], [81.9, 263.0], [82.0, 265.0], [82.1, 266.0], [82.2, 268.0], [82.3, 269.0], [82.4, 270.0], [82.5, 272.0], [82.6, 273.0], [82.7, 274.0], [82.8, 276.0], [82.9, 278.0], [83.0, 280.0], [83.1, 281.0], [83.2, 282.0], [83.3, 284.0], [83.4, 285.0], [83.5, 286.0], [83.6, 288.0], [83.7, 290.0], [83.8, 291.0], [83.9, 294.0], [84.0, 295.0], [84.1, 297.0], [84.2, 300.0], [84.3, 303.0], [84.4, 304.0], [84.5, 306.0], [84.6, 309.0], [84.7, 311.0], [84.8, 313.0], [84.9, 315.0], [85.0, 317.0], [85.1, 320.0], [85.2, 321.0], [85.3, 323.0], [85.4, 325.0], [85.5, 327.0], [85.6, 329.0], [85.7, 331.0], [85.8, 334.0], [85.9, 337.0], [86.0, 339.0], [86.1, 341.0], [86.2, 343.0], [86.3, 344.0], [86.4, 346.0], [86.5, 347.0], [86.6, 348.0], [86.7, 350.0], [86.8, 351.0], [86.9, 353.0], [87.0, 354.0], [87.1, 356.0], [87.2, 357.0], [87.3, 360.0], [87.4, 361.0], [87.5, 363.0], [87.6, 364.0], [87.7, 367.0], [87.8, 368.0], [87.9, 370.0], [88.0, 372.0], [88.1, 373.0], [88.2, 375.0], [88.3, 377.0], [88.4, 379.0], [88.5, 380.0], [88.6, 383.0], [88.7, 385.0], [88.8, 386.0], [88.9, 388.0], [89.0, 390.0], [89.1, 391.0], [89.2, 392.0], [89.3, 394.0], [89.4, 395.0], [89.5, 398.0], [89.6, 399.0], [89.7, 401.0], [89.8, 403.0], [89.9, 404.0], [90.0, 405.0], [90.1, 407.0], [90.2, 409.0], [90.3, 410.0], [90.4, 412.0], [90.5, 413.0], [90.6, 414.0], [90.7, 416.0], [90.8, 419.0], [90.9, 420.0], [91.0, 422.0], [91.1, 424.0], [91.2, 425.0], [91.3, 426.0], [91.4, 427.0], [91.5, 428.0], [91.6, 429.0], [91.7, 431.0], [91.8, 433.0], [91.9, 435.0], [92.0, 437.0], [92.1, 438.0], [92.2, 440.0], [92.3, 442.0], [92.4, 443.0], [92.5, 445.0], [92.6, 447.0], [92.7, 448.0], [92.8, 450.0], [92.9, 452.0], [93.0, 454.0], [93.1, 456.0], [93.2, 458.0], [93.3, 459.0], [93.4, 461.0], [93.5, 463.0], [93.6, 464.0], [93.7, 466.0], [93.8, 468.0], [93.9, 471.0], [94.0, 473.0], [94.1, 474.0], [94.2, 476.0], [94.3, 478.0], [94.4, 480.0], [94.5, 482.0], [94.6, 484.0], [94.7, 486.0], [94.8, 488.0], [94.9, 490.0], [95.0, 492.0], [95.1, 494.0], [95.2, 496.0], [95.3, 499.0], [95.4, 500.0], [95.5, 503.0], [95.6, 506.0], [95.7, 508.0], [95.8, 511.0], [95.9, 513.0], [96.0, 517.0], [96.1, 519.0], [96.2, 522.0], [96.3, 525.0], [96.4, 528.0], [96.5, 531.0], [96.6, 535.0], [96.7, 539.0], [96.8, 543.0], [96.9, 548.0], [97.0, 551.0], [97.1, 556.0], [97.2, 559.0], [97.3, 561.0], [97.4, 565.0], [97.5, 570.0], [97.6, 577.0], [97.7, 581.0], [97.8, 586.0], [97.9, 592.0], [98.0, 595.0], [98.1, 601.0], [98.2, 609.0], [98.3, 614.0], [98.4, 620.0], [98.5, 628.0], [98.6, 643.0], [98.7, 657.0], [98.8, 664.0], [98.9, 674.0], [99.0, 687.0], [99.1, 715.0], [99.2, 755.0], [99.3, 784.0], [99.4, 818.0], [99.5, 914.0], [99.6, 1011.0], [99.7, 1093.0], [99.8, 1305.0], [99.9, 1509.0], [100.0, 1696.0]], "isOverall": false, "label": "HTTP Request for categories", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 8404.0, "series": [{"data": [[0.0, 8404.0], [600.0, 174.0], [700.0, 55.0], [200.0, 1909.0], [800.0, 25.0], [900.0, 19.0], [1000.0, 21.0], [1100.0, 10.0], [300.0, 982.0], [1200.0, 5.0], [1300.0, 10.0], [1400.0, 9.0], [1500.0, 9.0], [100.0, 4836.0], [400.0, 1034.0], [1600.0, 10.0], [500.0, 488.0]], "isOverall": false, "label": "HTTP Request for categories", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 19.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 17173.0, "series": [{"data": [[0.0, 17173.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 808.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 19.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.0138358778625975, "minX": 1.64824188E12, "maxY": 16.116729877791848, "series": [{"data": [[1.648242E12, 2.881261595547309], [1.64824218E12, 16.116729877791848], [1.64824236E12, 7.961989676208348], [1.64824188E12, 5.202925045703842], [1.64824206E12, 2.0138358778625975], [1.64824224E12, 2.971454058876003], [1.64824194E12, 4.5008912655971445], [1.64824242E12, 6.227053140096616], [1.64824212E12, 8.959606421543242], [1.6482423E12, 2.1915098890496854]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 16.0, "minX": 1.0, "maxY": 604.888198757764, "series": [{"data": [[2.0, 20.92758620689656], [3.0, 36.373617021276644], [4.0, 46.494939271255035], [5.0, 52.49739039665984], [6.0, 76.88946015424169], [7.0, 71.66363636363637], [8.0, 97.12663755458519], [9.0, 127.6929824561403], [10.0, 102.49999999999993], [11.0, 131.18452380952374], [12.0, 123.23488045007032], [13.0, 151.9597069597069], [14.0, 151.12176165803103], [15.0, 157.23197115384627], [16.0, 203.57880434782612], [17.0, 174.20677361853834], [18.0, 207.93390804597706], [19.0, 197.72454090150268], [20.0, 215.51565377532216], [21.0, 220.0258064516129], [22.0, 231.6655290102389], [23.0, 242.13274336283186], [24.0, 246.83068783068788], [25.0, 280.5040983606557], [26.0, 313.99999999999994], [27.0, 334.6740331491713], [28.0, 307.7118644067797], [29.0, 338.29333333333335], [30.0, 324.63157894736844], [31.0, 391.0434782608697], [32.0, 343.88000000000005], [33.0, 281.1363636363636], [34.0, 355.4090909090909], [35.0, 416.53658536585374], [37.0, 375.1071428571428], [36.0, 396.87671232876704], [38.0, 400.11111111111103], [39.0, 393.9593495934958], [40.0, 527.05303030303], [41.0, 458.6709677419354], [42.0, 432.29296874999994], [43.0, 451.2721893491127], [44.0, 525.6413043478259], [45.0, 508.5180722891565], [46.0, 535.6736842105262], [47.0, 487.5333333333334], [48.0, 604.888198757764], [49.0, 514.147859922179], [50.0, 527.1176470588236], [51.0, 546.9318181818181], [52.0, 516.1428571428571], [1.0, 16.0]], "isOverall": false, "label": "HTTP Request for categories", "isController": false}, {"data": [[14.999944444444408, 164.40827777777722]], "isOverall": false, "label": "HTTP Request for categories-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 52.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 458.85, "minX": 1.64824188E12, "maxY": 4373874.05, "series": [{"data": [[1.648242E12, 3973903.2666666666], [1.64824218E12, 4373874.05], [1.64824236E12, 3927823.683333333], [1.64824188E12, 1008221.2833333333], [1.64824206E12, 3863312.2666666666], [1.64824224E12, 4132417.033333333], [1.64824194E12, 4136103.4], [1.64824242E12, 381538.95], [1.64824212E12, 3559187.0166666666], [1.6482423E12, 3820919.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.648242E12, 4779.133333333333], [1.64824218E12, 5260.15], [1.64824236E12, 4723.716666666666], [1.64824188E12, 1212.5166666666667], [1.64824206E12, 4646.133333333333], [1.64824224E12, 4969.766666666666], [1.64824194E12, 4974.2], [1.64824242E12, 458.85], [1.64824212E12, 4280.383333333333], [1.6482423E12, 4595.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 56.53387404580156, "minX": 1.64824188E12, "maxY": 417.0471976401176, "series": [{"data": [[1.648242E12, 76.9141929499073], [1.64824218E12, 417.0471976401176], [1.64824236E12, 222.06288127639593], [1.64824188E12, 150.60877513711162], [1.64824206E12, 56.53387404580156], [1.64824224E12, 75.83764495985744], [1.64824194E12, 118.62566844919772], [1.64824242E12, 134.1787439613527], [1.64824212E12, 278.5655100983946], [1.6482423E12, 61.6816208393631]], "isOverall": false, "label": "HTTP Request for categories", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 54.13311068702288, "minX": 1.64824188E12, "maxY": 414.5415086388533, "series": [{"data": [[1.648242E12, 74.4744897959185], [1.64824218E12, 414.5415086388533], [1.64824236E12, 218.2299389957766], [1.64824188E12, 148.1937842778794], [1.64824206E12, 54.13311068702288], [1.64824224E12, 73.20785013380903], [1.64824194E12, 116.40285204991056], [1.64824242E12, 131.8502415458937], [1.64824212E12, 275.25012946659774], [1.6482423E12, 58.718765074770815]], "isOverall": false, "label": "HTTP Request for categories", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.004830917874396134, "minX": 1.64824188E12, "maxY": 0.06266183324702226, "series": [{"data": [[1.648242E12, 0.0227272727272727], [1.64824218E12, 0.02107037505267595], [1.64824236E12, 0.03144063819802914], [1.64824188E12, 0.03473491773308955], [1.64824206E12, 0.027194656488549625], [1.64824224E12, 0.020517395182872482], [1.64824194E12, 0.02450980392156864], [1.64824242E12, 0.004830917874396134], [1.64824212E12, 0.06266183324702226], [1.6482423E12, 0.02556681138446699]], "isOverall": false, "label": "HTTP Request for categories", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 13.0, "minX": 1.64824188E12, "maxY": 1696.0, "series": [{"data": [[1.648242E12, 545.0], [1.64824218E12, 1696.0], [1.64824236E12, 1088.0], [1.64824188E12, 544.0], [1.64824206E12, 426.0], [1.64824224E12, 550.0], [1.64824194E12, 1152.0], [1.64824242E12, 277.0], [1.64824212E12, 1531.0], [1.6482423E12, 647.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.648242E12, 133.0], [1.64824218E12, 582.0], [1.64824236E12, 305.79999999999995], [1.64824188E12, 231.2], [1.64824206E12, 90.0], [1.64824224E12, 133.0], [1.64824194E12, 191.0], [1.64824242E12, 218.20000000000002], [1.64824212E12, 495.0], [1.6482423E12, 116.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.648242E12, 282.1499999999992], [1.64824218E12, 1170.5599999999986], [1.64824236E12, 697.8399999999979], [1.64824188E12, 457.55999999999995], [1.64824206E12, 217.2100000000014], [1.64824224E12, 222.57000000000016], [1.64824194E12, 632.2000000000044], [1.64824242E12, 255.59999999999994], [1.64824212E12, 1270.8000000000022], [1.6482423E12, 334.5199999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.648242E12, 155.1500000000001], [1.64824218E12, 638.8999999999992], [1.64824236E12, 390.0], [1.64824188E12, 280.20000000000005], [1.64824206E12, 128.14999999999986], [1.64824224E12, 152.0], [1.64824194E12, 209.0], [1.64824242E12, 233.0], [1.64824212E12, 600.3999999999999], [1.6482423E12, 138.29999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.648242E12, 14.0], [1.64824218E12, 116.0], [1.64824236E12, 99.0], [1.64824188E12, 15.0], [1.64824206E12, 13.0], [1.64824224E12, 14.0], [1.64824194E12, 15.0], [1.64824242E12, 14.0], [1.64824212E12, 70.0], [1.6482423E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.648242E12, 65.0], [1.64824218E12, 413.0], [1.64824236E12, 204.0], [1.64824188E12, 174.0], [1.64824206E12, 47.0], [1.64824224E12, 59.0], [1.64824194E12, 108.0], [1.64824242E12, 143.0], [1.64824212E12, 198.0], [1.6482423E12, 47.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 50.0, "minX": 3.0, "maxY": 1013.5, "series": [{"data": [[32.0, 85.5], [33.0, 100.0], [35.0, 71.0], [34.0, 54.0], [36.0, 51.0], [37.0, 50.0], [38.0, 83.5], [39.0, 76.0], [40.0, 100.0], [41.0, 128.5], [43.0, 99.0], [42.0, 116.5], [45.0, 166.0], [44.0, 135.0], [46.0, 178.5], [47.0, 148.0], [49.0, 150.0], [48.0, 175.5], [3.0, 393.0], [50.0, 151.0], [53.0, 266.0], [66.0, 57.5], [6.0, 351.0], [7.0, 592.0], [8.0, 422.5], [9.0, 540.0], [10.0, 676.0], [11.0, 640.5], [12.0, 796.5], [13.0, 459.0], [14.0, 285.5], [16.0, 1013.5], [18.0, 112.5], [19.0, 522.0], [20.0, 193.5], [21.0, 121.0], [22.0, 172.0], [23.0, 255.0], [24.0, 234.0], [25.0, 316.5], [26.0, 51.0], [27.0, 147.0], [28.0, 203.0], [29.0, 163.0], [30.0, 126.5], [31.0, 111.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 47.0, "minX": 3.0, "maxY": 1010.5, "series": [{"data": [[32.0, 83.0], [33.0, 98.0], [35.0, 67.0], [34.0, 51.0], [36.0, 49.0], [37.0, 47.0], [38.0, 79.0], [39.0, 73.0], [40.0, 98.0], [41.0, 126.0], [43.0, 97.5], [42.0, 114.0], [45.0, 164.0], [44.0, 133.0], [46.0, 176.0], [47.0, 146.0], [49.0, 149.0], [48.0, 174.0], [3.0, 386.0], [50.0, 149.0], [53.0, 265.0], [66.0, 55.5], [6.0, 342.5], [7.0, 585.0], [8.0, 408.5], [9.0, 531.0], [10.0, 667.5], [11.0, 629.0], [12.0, 790.0], [13.0, 443.0], [14.0, 232.5], [16.0, 1010.5], [18.0, 110.5], [19.0, 521.0], [20.0, 190.0], [21.0, 119.0], [22.0, 168.0], [23.0, 253.0], [24.0, 230.0], [25.0, 315.0], [26.0, 49.0], [27.0, 141.0], [28.0, 202.0], [29.0, 161.0], [30.0, 124.5], [31.0, 108.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.316666666666667, "minX": 1.64824188E12, "maxY": 39.38333333333333, "series": [{"data": [[1.648242E12, 35.93333333333333], [1.64824218E12, 39.38333333333333], [1.64824236E12, 35.56666666666667], [1.64824188E12, 9.216666666666667], [1.64824206E12, 35.0], [1.64824224E12, 37.28333333333333], [1.64824194E12, 37.31666666666667], [1.64824242E12, 3.316666666666667], [1.64824212E12, 32.36666666666667], [1.6482423E12, 34.61666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.45, "minX": 1.64824188E12, "maxY": 39.55, "series": [{"data": [[1.648242E12, 35.93333333333333], [1.64824218E12, 39.55], [1.64824236E12, 35.516666666666666], [1.64824188E12, 9.116666666666667], [1.64824206E12, 34.93333333333333], [1.64824224E12, 37.36666666666667], [1.64824194E12, 37.4], [1.64824242E12, 3.45], [1.64824212E12, 32.18333333333333], [1.6482423E12, 34.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.45, "minX": 1.64824188E12, "maxY": 39.55, "series": [{"data": [[1.648242E12, 35.93333333333333], [1.64824218E12, 39.55], [1.64824236E12, 35.516666666666666], [1.64824188E12, 9.116666666666667], [1.64824206E12, 34.93333333333333], [1.64824224E12, 37.36666666666667], [1.64824194E12, 37.4], [1.64824242E12, 3.45], [1.64824212E12, 32.18333333333333], [1.6482423E12, 34.55]], "isOverall": false, "label": "HTTP Request for categories-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.45, "minX": 1.64824188E12, "maxY": 39.55, "series": [{"data": [[1.648242E12, 35.93333333333333], [1.64824218E12, 39.55], [1.64824236E12, 35.516666666666666], [1.64824188E12, 9.116666666666667], [1.64824206E12, 34.93333333333333], [1.64824224E12, 37.36666666666667], [1.64824194E12, 37.4], [1.64824242E12, 3.45], [1.64824212E12, 32.18333333333333], [1.6482423E12, 34.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

