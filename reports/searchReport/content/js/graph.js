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
        data: {"result": {"minY": 12.0, "minX": 0.0, "maxY": 1804.0, "series": [{"data": [[0.0, 12.0], [0.1, 15.0], [0.2, 15.0], [0.3, 15.0], [0.4, 16.0], [0.5, 16.0], [0.6, 16.0], [0.7, 16.0], [0.8, 17.0], [0.9, 17.0], [1.0, 17.0], [1.1, 17.0], [1.2, 17.0], [1.3, 17.0], [1.4, 18.0], [1.5, 18.0], [1.6, 18.0], [1.7, 18.0], [1.8, 19.0], [1.9, 19.0], [2.0, 19.0], [2.1, 19.0], [2.2, 20.0], [2.3, 20.0], [2.4, 20.0], [2.5, 21.0], [2.6, 21.0], [2.7, 22.0], [2.8, 22.0], [2.9, 22.0], [3.0, 23.0], [3.1, 23.0], [3.2, 24.0], [3.3, 24.0], [3.4, 24.0], [3.5, 25.0], [3.6, 25.0], [3.7, 25.0], [3.8, 26.0], [3.9, 26.0], [4.0, 26.0], [4.1, 26.0], [4.2, 26.0], [4.3, 27.0], [4.4, 27.0], [4.5, 27.0], [4.6, 27.0], [4.7, 28.0], [4.8, 28.0], [4.9, 28.0], [5.0, 28.0], [5.1, 28.0], [5.2, 28.0], [5.3, 29.0], [5.4, 29.0], [5.5, 29.0], [5.6, 29.0], [5.7, 29.0], [5.8, 29.0], [5.9, 30.0], [6.0, 30.0], [6.1, 30.0], [6.2, 30.0], [6.3, 30.0], [6.4, 30.0], [6.5, 31.0], [6.6, 31.0], [6.7, 31.0], [6.8, 31.0], [6.9, 31.0], [7.0, 31.0], [7.1, 31.0], [7.2, 31.0], [7.3, 32.0], [7.4, 32.0], [7.5, 32.0], [7.6, 32.0], [7.7, 32.0], [7.8, 32.0], [7.9, 32.0], [8.0, 33.0], [8.1, 33.0], [8.2, 33.0], [8.3, 33.0], [8.4, 33.0], [8.5, 33.0], [8.6, 33.0], [8.7, 33.0], [8.8, 34.0], [8.9, 34.0], [9.0, 34.0], [9.1, 34.0], [9.2, 34.0], [9.3, 34.0], [9.4, 34.0], [9.5, 34.0], [9.6, 34.0], [9.7, 34.0], [9.8, 34.0], [9.9, 35.0], [10.0, 35.0], [10.1, 35.0], [10.2, 35.0], [10.3, 35.0], [10.4, 35.0], [10.5, 35.0], [10.6, 35.0], [10.7, 35.0], [10.8, 35.0], [10.9, 35.0], [11.0, 36.0], [11.1, 36.0], [11.2, 36.0], [11.3, 36.0], [11.4, 36.0], [11.5, 36.0], [11.6, 36.0], [11.7, 36.0], [11.8, 36.0], [11.9, 36.0], [12.0, 37.0], [12.1, 37.0], [12.2, 37.0], [12.3, 37.0], [12.4, 37.0], [12.5, 37.0], [12.6, 37.0], [12.7, 37.0], [12.8, 37.0], [12.9, 37.0], [13.0, 37.0], [13.1, 37.0], [13.2, 37.0], [13.3, 38.0], [13.4, 38.0], [13.5, 38.0], [13.6, 38.0], [13.7, 38.0], [13.8, 38.0], [13.9, 38.0], [14.0, 38.0], [14.1, 38.0], [14.2, 38.0], [14.3, 38.0], [14.4, 38.0], [14.5, 39.0], [14.6, 39.0], [14.7, 39.0], [14.8, 39.0], [14.9, 39.0], [15.0, 39.0], [15.1, 39.0], [15.2, 39.0], [15.3, 39.0], [15.4, 39.0], [15.5, 39.0], [15.6, 39.0], [15.7, 39.0], [15.8, 39.0], [15.9, 39.0], [16.0, 40.0], [16.1, 40.0], [16.2, 40.0], [16.3, 40.0], [16.4, 40.0], [16.5, 40.0], [16.6, 40.0], [16.7, 40.0], [16.8, 40.0], [16.9, 40.0], [17.0, 40.0], [17.1, 40.0], [17.2, 40.0], [17.3, 41.0], [17.4, 41.0], [17.5, 41.0], [17.6, 41.0], [17.7, 41.0], [17.8, 41.0], [17.9, 41.0], [18.0, 41.0], [18.1, 41.0], [18.2, 41.0], [18.3, 41.0], [18.4, 41.0], [18.5, 41.0], [18.6, 42.0], [18.7, 42.0], [18.8, 42.0], [18.9, 42.0], [19.0, 42.0], [19.1, 42.0], [19.2, 42.0], [19.3, 42.0], [19.4, 42.0], [19.5, 42.0], [19.6, 42.0], [19.7, 42.0], [19.8, 42.0], [19.9, 43.0], [20.0, 43.0], [20.1, 43.0], [20.2, 43.0], [20.3, 43.0], [20.4, 43.0], [20.5, 43.0], [20.6, 43.0], [20.7, 43.0], [20.8, 43.0], [20.9, 43.0], [21.0, 43.0], [21.1, 44.0], [21.2, 44.0], [21.3, 44.0], [21.4, 44.0], [21.5, 44.0], [21.6, 44.0], [21.7, 44.0], [21.8, 44.0], [21.9, 44.0], [22.0, 44.0], [22.1, 44.0], [22.2, 44.0], [22.3, 45.0], [22.4, 45.0], [22.5, 45.0], [22.6, 45.0], [22.7, 45.0], [22.8, 45.0], [22.9, 45.0], [23.0, 45.0], [23.1, 45.0], [23.2, 45.0], [23.3, 45.0], [23.4, 46.0], [23.5, 46.0], [23.6, 46.0], [23.7, 46.0], [23.8, 46.0], [23.9, 46.0], [24.0, 46.0], [24.1, 46.0], [24.2, 46.0], [24.3, 46.0], [24.4, 46.0], [24.5, 46.0], [24.6, 47.0], [24.7, 47.0], [24.8, 47.0], [24.9, 47.0], [25.0, 47.0], [25.1, 47.0], [25.2, 47.0], [25.3, 47.0], [25.4, 47.0], [25.5, 47.0], [25.6, 47.0], [25.7, 48.0], [25.8, 48.0], [25.9, 48.0], [26.0, 48.0], [26.1, 48.0], [26.2, 48.0], [26.3, 48.0], [26.4, 48.0], [26.5, 48.0], [26.6, 48.0], [26.7, 49.0], [26.8, 49.0], [26.9, 49.0], [27.0, 49.0], [27.1, 49.0], [27.2, 49.0], [27.3, 49.0], [27.4, 49.0], [27.5, 49.0], [27.6, 49.0], [27.7, 50.0], [27.8, 50.0], [27.9, 50.0], [28.0, 50.0], [28.1, 50.0], [28.2, 50.0], [28.3, 50.0], [28.4, 50.0], [28.5, 50.0], [28.6, 51.0], [28.7, 51.0], [28.8, 51.0], [28.9, 51.0], [29.0, 51.0], [29.1, 51.0], [29.2, 51.0], [29.3, 51.0], [29.4, 51.0], [29.5, 51.0], [29.6, 52.0], [29.7, 52.0], [29.8, 52.0], [29.9, 52.0], [30.0, 52.0], [30.1, 52.0], [30.2, 52.0], [30.3, 52.0], [30.4, 53.0], [30.5, 53.0], [30.6, 53.0], [30.7, 53.0], [30.8, 53.0], [30.9, 53.0], [31.0, 53.0], [31.1, 53.0], [31.2, 54.0], [31.3, 54.0], [31.4, 54.0], [31.5, 54.0], [31.6, 54.0], [31.7, 55.0], [31.8, 55.0], [31.9, 55.0], [32.0, 55.0], [32.1, 55.0], [32.2, 55.0], [32.3, 55.0], [32.4, 56.0], [32.5, 56.0], [32.6, 56.0], [32.7, 56.0], [32.8, 56.0], [32.9, 56.0], [33.0, 56.0], [33.1, 57.0], [33.2, 57.0], [33.3, 57.0], [33.4, 57.0], [33.5, 57.0], [33.6, 57.0], [33.7, 58.0], [33.8, 58.0], [33.9, 58.0], [34.0, 58.0], [34.1, 59.0], [34.2, 59.0], [34.3, 59.0], [34.4, 59.0], [34.5, 59.0], [34.6, 60.0], [34.7, 60.0], [34.8, 60.0], [34.9, 60.0], [35.0, 60.0], [35.1, 60.0], [35.2, 61.0], [35.3, 61.0], [35.4, 61.0], [35.5, 61.0], [35.6, 62.0], [35.7, 62.0], [35.8, 62.0], [35.9, 62.0], [36.0, 63.0], [36.1, 63.0], [36.2, 63.0], [36.3, 63.0], [36.4, 63.0], [36.5, 64.0], [36.6, 64.0], [36.7, 64.0], [36.8, 64.0], [36.9, 65.0], [37.0, 65.0], [37.1, 65.0], [37.2, 65.0], [37.3, 66.0], [37.4, 66.0], [37.5, 66.0], [37.6, 67.0], [37.7, 67.0], [37.8, 67.0], [37.9, 68.0], [38.0, 68.0], [38.1, 68.0], [38.2, 69.0], [38.3, 69.0], [38.4, 69.0], [38.5, 70.0], [38.6, 70.0], [38.7, 70.0], [38.8, 70.0], [38.9, 71.0], [39.0, 71.0], [39.1, 71.0], [39.2, 72.0], [39.3, 72.0], [39.4, 73.0], [39.5, 73.0], [39.6, 73.0], [39.7, 74.0], [39.8, 74.0], [39.9, 74.0], [40.0, 75.0], [40.1, 75.0], [40.2, 75.0], [40.3, 76.0], [40.4, 76.0], [40.5, 76.0], [40.6, 77.0], [40.7, 77.0], [40.8, 77.0], [40.9, 78.0], [41.0, 78.0], [41.1, 78.0], [41.2, 79.0], [41.3, 79.0], [41.4, 80.0], [41.5, 80.0], [41.6, 80.0], [41.7, 81.0], [41.8, 81.0], [41.9, 81.0], [42.0, 82.0], [42.1, 82.0], [42.2, 83.0], [42.3, 83.0], [42.4, 83.0], [42.5, 84.0], [42.6, 84.0], [42.7, 85.0], [42.8, 85.0], [42.9, 85.0], [43.0, 86.0], [43.1, 86.0], [43.2, 86.0], [43.3, 87.0], [43.4, 87.0], [43.5, 87.0], [43.6, 88.0], [43.7, 88.0], [43.8, 88.0], [43.9, 89.0], [44.0, 89.0], [44.1, 90.0], [44.2, 90.0], [44.3, 90.0], [44.4, 91.0], [44.5, 91.0], [44.6, 91.0], [44.7, 91.0], [44.8, 92.0], [44.9, 92.0], [45.0, 92.0], [45.1, 93.0], [45.2, 93.0], [45.3, 93.0], [45.4, 94.0], [45.5, 94.0], [45.6, 95.0], [45.7, 95.0], [45.8, 95.0], [45.9, 96.0], [46.0, 96.0], [46.1, 97.0], [46.2, 97.0], [46.3, 97.0], [46.4, 98.0], [46.5, 98.0], [46.6, 98.0], [46.7, 99.0], [46.8, 99.0], [46.9, 99.0], [47.0, 100.0], [47.1, 100.0], [47.2, 101.0], [47.3, 101.0], [47.4, 101.0], [47.5, 101.0], [47.6, 102.0], [47.7, 102.0], [47.8, 102.0], [47.9, 103.0], [48.0, 103.0], [48.1, 103.0], [48.2, 104.0], [48.3, 104.0], [48.4, 104.0], [48.5, 105.0], [48.6, 105.0], [48.7, 105.0], [48.8, 106.0], [48.9, 106.0], [49.0, 107.0], [49.1, 107.0], [49.2, 107.0], [49.3, 108.0], [49.4, 108.0], [49.5, 109.0], [49.6, 109.0], [49.7, 109.0], [49.8, 110.0], [49.9, 110.0], [50.0, 111.0], [50.1, 111.0], [50.2, 111.0], [50.3, 112.0], [50.4, 112.0], [50.5, 113.0], [50.6, 113.0], [50.7, 113.0], [50.8, 113.0], [50.9, 114.0], [51.0, 114.0], [51.1, 115.0], [51.2, 115.0], [51.3, 115.0], [51.4, 116.0], [51.5, 116.0], [51.6, 116.0], [51.7, 116.0], [51.8, 117.0], [51.9, 117.0], [52.0, 118.0], [52.1, 118.0], [52.2, 118.0], [52.3, 119.0], [52.4, 119.0], [52.5, 119.0], [52.6, 120.0], [52.7, 120.0], [52.8, 121.0], [52.9, 121.0], [53.0, 121.0], [53.1, 121.0], [53.2, 122.0], [53.3, 122.0], [53.4, 122.0], [53.5, 123.0], [53.6, 123.0], [53.7, 123.0], [53.8, 124.0], [53.9, 124.0], [54.0, 124.0], [54.1, 124.0], [54.2, 125.0], [54.3, 125.0], [54.4, 126.0], [54.5, 126.0], [54.6, 126.0], [54.7, 127.0], [54.8, 127.0], [54.9, 127.0], [55.0, 127.0], [55.1, 128.0], [55.2, 128.0], [55.3, 128.0], [55.4, 129.0], [55.5, 129.0], [55.6, 129.0], [55.7, 130.0], [55.8, 130.0], [55.9, 130.0], [56.0, 131.0], [56.1, 131.0], [56.2, 131.0], [56.3, 132.0], [56.4, 132.0], [56.5, 132.0], [56.6, 133.0], [56.7, 133.0], [56.8, 133.0], [56.9, 134.0], [57.0, 134.0], [57.1, 134.0], [57.2, 135.0], [57.3, 135.0], [57.4, 135.0], [57.5, 136.0], [57.6, 136.0], [57.7, 136.0], [57.8, 136.0], [57.9, 137.0], [58.0, 137.0], [58.1, 137.0], [58.2, 137.0], [58.3, 138.0], [58.4, 138.0], [58.5, 139.0], [58.6, 139.0], [58.7, 139.0], [58.8, 140.0], [58.9, 140.0], [59.0, 140.0], [59.1, 141.0], [59.2, 141.0], [59.3, 141.0], [59.4, 142.0], [59.5, 142.0], [59.6, 142.0], [59.7, 143.0], [59.8, 143.0], [59.9, 143.0], [60.0, 143.0], [60.1, 144.0], [60.2, 144.0], [60.3, 145.0], [60.4, 145.0], [60.5, 145.0], [60.6, 146.0], [60.7, 146.0], [60.8, 146.0], [60.9, 147.0], [61.0, 147.0], [61.1, 147.0], [61.2, 148.0], [61.3, 148.0], [61.4, 148.0], [61.5, 149.0], [61.6, 149.0], [61.7, 150.0], [61.8, 150.0], [61.9, 150.0], [62.0, 150.0], [62.1, 151.0], [62.2, 151.0], [62.3, 151.0], [62.4, 152.0], [62.5, 152.0], [62.6, 153.0], [62.7, 153.0], [62.8, 153.0], [62.9, 153.0], [63.0, 154.0], [63.1, 154.0], [63.2, 155.0], [63.3, 155.0], [63.4, 156.0], [63.5, 156.0], [63.6, 157.0], [63.7, 157.0], [63.8, 157.0], [63.9, 158.0], [64.0, 158.0], [64.1, 158.0], [64.2, 159.0], [64.3, 159.0], [64.4, 159.0], [64.5, 160.0], [64.6, 160.0], [64.7, 161.0], [64.8, 161.0], [64.9, 162.0], [65.0, 162.0], [65.1, 162.0], [65.2, 163.0], [65.3, 163.0], [65.4, 163.0], [65.5, 164.0], [65.6, 164.0], [65.7, 164.0], [65.8, 165.0], [65.9, 165.0], [66.0, 166.0], [66.1, 166.0], [66.2, 166.0], [66.3, 167.0], [66.4, 167.0], [66.5, 168.0], [66.6, 168.0], [66.7, 168.0], [66.8, 169.0], [66.9, 169.0], [67.0, 170.0], [67.1, 170.0], [67.2, 170.0], [67.3, 171.0], [67.4, 171.0], [67.5, 172.0], [67.6, 172.0], [67.7, 172.0], [67.8, 173.0], [67.9, 173.0], [68.0, 174.0], [68.1, 174.0], [68.2, 174.0], [68.3, 175.0], [68.4, 175.0], [68.5, 176.0], [68.6, 176.0], [68.7, 176.0], [68.8, 177.0], [68.9, 177.0], [69.0, 178.0], [69.1, 178.0], [69.2, 178.0], [69.3, 179.0], [69.4, 179.0], [69.5, 180.0], [69.6, 180.0], [69.7, 180.0], [69.8, 181.0], [69.9, 181.0], [70.0, 181.0], [70.1, 182.0], [70.2, 182.0], [70.3, 183.0], [70.4, 183.0], [70.5, 183.0], [70.6, 184.0], [70.7, 185.0], [70.8, 185.0], [70.9, 185.0], [71.0, 186.0], [71.1, 186.0], [71.2, 187.0], [71.3, 187.0], [71.4, 188.0], [71.5, 188.0], [71.6, 189.0], [71.7, 189.0], [71.8, 190.0], [71.9, 190.0], [72.0, 190.0], [72.1, 191.0], [72.2, 191.0], [72.3, 192.0], [72.4, 192.0], [72.5, 193.0], [72.6, 193.0], [72.7, 193.0], [72.8, 194.0], [72.9, 195.0], [73.0, 195.0], [73.1, 195.0], [73.2, 196.0], [73.3, 196.0], [73.4, 197.0], [73.5, 197.0], [73.6, 198.0], [73.7, 198.0], [73.8, 199.0], [73.9, 199.0], [74.0, 199.0], [74.1, 200.0], [74.2, 200.0], [74.3, 201.0], [74.4, 202.0], [74.5, 202.0], [74.6, 203.0], [74.7, 203.0], [74.8, 203.0], [74.9, 204.0], [75.0, 204.0], [75.1, 205.0], [75.2, 205.0], [75.3, 206.0], [75.4, 206.0], [75.5, 207.0], [75.6, 208.0], [75.7, 208.0], [75.8, 209.0], [75.9, 209.0], [76.0, 210.0], [76.1, 210.0], [76.2, 211.0], [76.3, 212.0], [76.4, 212.0], [76.5, 213.0], [76.6, 213.0], [76.7, 214.0], [76.8, 215.0], [76.9, 215.0], [77.0, 216.0], [77.1, 217.0], [77.2, 217.0], [77.3, 218.0], [77.4, 219.0], [77.5, 219.0], [77.6, 220.0], [77.7, 220.0], [77.8, 221.0], [77.9, 221.0], [78.0, 222.0], [78.1, 223.0], [78.2, 224.0], [78.3, 224.0], [78.4, 225.0], [78.5, 226.0], [78.6, 227.0], [78.7, 228.0], [78.8, 229.0], [78.9, 229.0], [79.0, 230.0], [79.1, 231.0], [79.2, 231.0], [79.3, 232.0], [79.4, 233.0], [79.5, 234.0], [79.6, 235.0], [79.7, 236.0], [79.8, 237.0], [79.9, 238.0], [80.0, 239.0], [80.1, 240.0], [80.2, 240.0], [80.3, 241.0], [80.4, 242.0], [80.5, 244.0], [80.6, 245.0], [80.7, 245.0], [80.8, 247.0], [80.9, 248.0], [81.0, 249.0], [81.1, 250.0], [81.2, 251.0], [81.3, 252.0], [81.4, 253.0], [81.5, 254.0], [81.6, 256.0], [81.7, 257.0], [81.8, 258.0], [81.9, 260.0], [82.0, 261.0], [82.1, 262.0], [82.2, 264.0], [82.3, 265.0], [82.4, 267.0], [82.5, 269.0], [82.6, 271.0], [82.7, 272.0], [82.8, 274.0], [82.9, 275.0], [83.0, 276.0], [83.1, 278.0], [83.2, 279.0], [83.3, 281.0], [83.4, 284.0], [83.5, 286.0], [83.6, 287.0], [83.7, 289.0], [83.8, 290.0], [83.9, 292.0], [84.0, 293.0], [84.1, 296.0], [84.2, 298.0], [84.3, 301.0], [84.4, 303.0], [84.5, 306.0], [84.6, 308.0], [84.7, 311.0], [84.8, 313.0], [84.9, 315.0], [85.0, 316.0], [85.1, 318.0], [85.2, 320.0], [85.3, 321.0], [85.4, 323.0], [85.5, 324.0], [85.6, 326.0], [85.7, 328.0], [85.8, 330.0], [85.9, 332.0], [86.0, 334.0], [86.1, 335.0], [86.2, 338.0], [86.3, 339.0], [86.4, 342.0], [86.5, 344.0], [86.6, 346.0], [86.7, 348.0], [86.8, 350.0], [86.9, 351.0], [87.0, 353.0], [87.1, 355.0], [87.2, 357.0], [87.3, 358.0], [87.4, 360.0], [87.5, 362.0], [87.6, 363.0], [87.7, 365.0], [87.8, 367.0], [87.9, 369.0], [88.0, 370.0], [88.1, 372.0], [88.2, 374.0], [88.3, 375.0], [88.4, 378.0], [88.5, 379.0], [88.6, 381.0], [88.7, 383.0], [88.8, 385.0], [88.9, 386.0], [89.0, 387.0], [89.1, 389.0], [89.2, 390.0], [89.3, 391.0], [89.4, 393.0], [89.5, 395.0], [89.6, 397.0], [89.7, 400.0], [89.8, 401.0], [89.9, 402.0], [90.0, 404.0], [90.1, 405.0], [90.2, 407.0], [90.3, 408.0], [90.4, 410.0], [90.5, 411.0], [90.6, 413.0], [90.7, 414.0], [90.8, 415.0], [90.9, 417.0], [91.0, 419.0], [91.1, 420.0], [91.2, 422.0], [91.3, 423.0], [91.4, 425.0], [91.5, 426.0], [91.6, 428.0], [91.7, 430.0], [91.8, 431.0], [91.9, 433.0], [92.0, 434.0], [92.1, 435.0], [92.2, 436.0], [92.3, 438.0], [92.4, 439.0], [92.5, 441.0], [92.6, 443.0], [92.7, 445.0], [92.8, 446.0], [92.9, 447.0], [93.0, 449.0], [93.1, 450.0], [93.2, 453.0], [93.3, 454.0], [93.4, 456.0], [93.5, 458.0], [93.6, 459.0], [93.7, 461.0], [93.8, 463.0], [93.9, 466.0], [94.0, 468.0], [94.1, 470.0], [94.2, 472.0], [94.3, 474.0], [94.4, 477.0], [94.5, 479.0], [94.6, 481.0], [94.7, 484.0], [94.8, 486.0], [94.9, 488.0], [95.0, 490.0], [95.1, 492.0], [95.2, 494.0], [95.3, 496.0], [95.4, 498.0], [95.5, 502.0], [95.6, 505.0], [95.7, 507.0], [95.8, 509.0], [95.9, 512.0], [96.0, 515.0], [96.1, 520.0], [96.2, 523.0], [96.3, 525.0], [96.4, 528.0], [96.5, 531.0], [96.6, 534.0], [96.7, 536.0], [96.8, 540.0], [96.9, 543.0], [97.0, 546.0], [97.1, 549.0], [97.2, 554.0], [97.3, 556.0], [97.4, 560.0], [97.5, 563.0], [97.6, 568.0], [97.7, 572.0], [97.8, 581.0], [97.9, 589.0], [98.0, 593.0], [98.1, 599.0], [98.2, 604.0], [98.3, 608.0], [98.4, 615.0], [98.5, 625.0], [98.6, 630.0], [98.7, 645.0], [98.8, 660.0], [98.9, 671.0], [99.0, 683.0], [99.1, 710.0], [99.2, 745.0], [99.3, 798.0], [99.4, 824.0], [99.5, 899.0], [99.6, 1014.0], [99.7, 1101.0], [99.8, 1288.0], [99.9, 1449.0], [100.0, 1804.0]], "isOverall": false, "label": "HTTP Request for search path", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 8446.0, "series": [{"data": [[0.0, 8446.0], [600.0, 169.0], [700.0, 46.0], [200.0, 1837.0], [800.0, 35.0], [900.0, 16.0], [1000.0, 19.0], [1100.0, 7.0], [300.0, 984.0], [1200.0, 15.0], [1300.0, 6.0], [1400.0, 12.0], [1500.0, 9.0], [100.0, 4878.0], [400.0, 1034.0], [1600.0, 4.0], [1700.0, 1.0], [1800.0, 1.0], [500.0, 481.0]], "isOverall": false, "label": "HTTP Request for search path", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 15.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 17184.0, "series": [{"data": [[0.0, 17184.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 801.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.9552167698904244, "minX": 1.64824188E12, "maxY": 16.009688289806228, "series": [{"data": [[1.648242E12, 2.8041763341067307], [1.64824218E12, 16.009688289806228], [1.64824236E12, 7.8723603941811415], [1.64824188E12, 5.129326047358831], [1.64824206E12, 1.9552167698904244], [1.64824224E12, 2.910227780259046], [1.64824194E12, 4.430926916221051], [1.64824242E12, 6.176470588235295], [1.64824212E12, 8.880767236910307], [1.6482423E12, 2.1184971098265866]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 20.66499999999999, "minX": 2.0, "maxY": 594.8645161290322, "series": [{"data": [[2.0, 20.66499999999999], [3.0, 34.86108786610881], [4.0, 42.747191011235955], [5.0, 50.2696629213483], [6.0, 77.71739130434781], [7.0, 68.71743929359822], [8.0, 92.90329218106997], [9.0, 142.70297029702965], [10.0, 100.57627118644066], [11.0, 130.58666666666662], [12.0, 121.14979195561726], [13.0, 154.0915750915752], [14.0, 147.53295128939814], [15.0, 154.2437641723355], [16.0, 200.99117647058813], [17.0, 170.46551724137944], [18.0, 210.02298850574712], [19.0, 194.9390862944162], [20.0, 208.3663716814159], [21.0, 218.62080536912748], [22.0, 229.77483443708613], [23.0, 249.37373737373727], [24.0, 243.56852791878183], [25.0, 278.35156249999983], [26.0, 303.5782312925171], [27.0, 335.18090452261316], [28.0, 309.7254901960784], [29.0, 342.55], [30.0, 314.0277777777777], [31.0, 364.875], [32.0, 333.7415730337079], [33.0, 282.0909090909091], [34.0, 348.57142857142856], [35.0, 400.74], [37.0, 378.3556701030929], [36.0, 383.97222222222223], [38.0, 405.63736263736257], [39.0, 390.5916666666668], [40.0, 484.788321167883], [41.0, 460.12987012986997], [42.0, 438.4920634920633], [43.0, 461.40571428571417], [44.0, 538.0700000000002], [45.0, 485.6753246753247], [47.0, 527.1559633027523], [46.0, 490.8222222222223], [48.0, 594.8645161290322], [49.0, 508.6782945736433], [50.0, 538.5187499999996], [51.0, 545.2380952380953], [52.0, 547.5]], "isOverall": false, "label": "HTTP Request for search path", "isController": false}, {"data": [[15.020944444444458, 162.2979999999998]], "isOverall": false, "label": "HTTP Request for search path-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 52.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 448.8, "minX": 1.64824188E12, "maxY": 1330983.1, "series": [{"data": [[1.648242E12, 1208200.75], [1.64824218E12, 1330983.1], [1.64824236E12, 1194745.15], [1.64824188E12, 307796.85], [1.64824206E12, 1176804.35], [1.64824224E12, 1255295.35], [1.64824194E12, 1258098.6], [1.64824242E12, 114372.6], [1.64824212E12, 1081493.85], [1.6482423E12, 1163909.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.648242E12, 4741.0], [1.64824218E12, 5222.8], [1.64824236E12, 4688.2], [1.64824188E12, 1207.8], [1.64824206E12, 4617.8], [1.64824224E12, 4925.8], [1.64824194E12, 4936.8], [1.64824242E12, 448.8], [1.64824212E12, 4243.8], [1.6482423E12, 4567.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 54.828489757027114, "minX": 1.64824188E12, "maxY": 415.2127211457462, "series": [{"data": [[1.648242E12, 75.15730858468685], [1.64824218E12, 415.2127211457462], [1.64824236E12, 220.11496949788804], [1.64824188E12, 148.10382513661185], [1.64824206E12, 54.828489757027114], [1.64824224E12, 73.85216614560076], [1.64824194E12, 116.63057040998227], [1.64824242E12, 133.7794117647059], [1.64824212E12, 274.9362363919127], [1.6482423E12, 59.49373795761076]], "isOverall": false, "label": "HTTP Request for search path", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 54.73034778465931, "minX": 1.64824188E12, "maxY": 415.01558550968787, "series": [{"data": [[1.648242E12, 75.07517401392111], [1.64824218E12, 415.01558550968787], [1.64824236E12, 219.84889723134663], [1.64824188E12, 147.9508196721312], [1.64824206E12, 54.73034778465931], [1.64824224E12, 73.77355962483253], [1.64824194E12, 116.53297682709473], [1.64824242E12, 133.7156862745097], [1.64824212E12, 274.7019180922759], [1.6482423E12, 59.33236994219654]], "isOverall": false, "label": "HTTP Request for search path", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.009803921568627449, "minX": 1.64824188E12, "maxY": 0.04007285974499088, "series": [{"data": [[1.648242E12, 0.023665893271461742], [1.64824218E12, 0.018112889637742213], [1.64824236E12, 0.031909901454716214], [1.64824188E12, 0.04007285974499088], [1.64824206E12, 0.026679371129109116], [1.64824224E12, 0.02009825815096025], [1.64824194E12, 0.021836007130124836], [1.64824242E12, 0.009803921568627449], [1.64824212E12, 0.031622602384655266], [1.6482423E12, 0.029865125240847796]], "isOverall": false, "label": "HTTP Request for search path", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 12.0, "minX": 1.64824188E12, "maxY": 1804.0, "series": [{"data": [[1.648242E12, 589.0], [1.64824218E12, 1804.0], [1.64824236E12, 1134.0], [1.64824188E12, 524.0], [1.64824206E12, 426.0], [1.64824224E12, 479.0], [1.64824194E12, 1040.0], [1.64824242E12, 261.0], [1.64824212E12, 1581.0], [1.6482423E12, 664.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.648242E12, 132.0], [1.64824218E12, 577.0], [1.64824236E12, 304.0], [1.64824188E12, 233.0], [1.64824206E12, 89.0], [1.64824224E12, 131.0], [1.64824194E12, 190.0], [1.64824242E12, 222.0], [1.64824212E12, 490.0], [1.6482423E12, 112.29999999999995]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.648242E12, 301.44000000000005], [1.64824218E12, 1279.75], [1.64824236E12, 703.0399999999995], [1.64824188E12, 458.5], [1.64824206E12, 218.0], [1.64824224E12, 216.39999999999964], [1.64824194E12, 630.0], [1.64824242E12, 259.79999999999995], [1.64824212E12, 1209.4], [1.6482423E12, 311.23]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.648242E12, 153.0], [1.64824218E12, 630.25], [1.64824236E12, 393.7999999999997], [1.64824188E12, 275.5], [1.64824206E12, 123.0], [1.64824224E12, 151.0], [1.64824194E12, 209.75], [1.64824242E12, 235.0], [1.64824212E12, 595.5], [1.6482423E12, 134.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.648242E12, 14.0], [1.64824218E12, 110.0], [1.64824236E12, 93.0], [1.64824188E12, 15.0], [1.64824206E12, 14.0], [1.64824224E12, 14.0], [1.64824194E12, 12.0], [1.64824242E12, 17.0], [1.64824212E12, 73.0], [1.6482423E12, 14.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.648242E12, 62.0], [1.64824218E12, 413.0], [1.64824236E12, 203.0], [1.64824188E12, 171.0], [1.64824206E12, 46.0], [1.64824224E12, 57.0], [1.64824194E12, 106.0], [1.64824242E12, 142.0], [1.64824212E12, 194.0], [1.6482423E12, 44.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 18.0, "minX": 2.0, "maxY": 1420.0, "series": [{"data": [[33.0, 126.5], [32.0, 91.0], [2.0, 1057.0], [35.0, 52.0], [34.0, 50.0], [36.0, 49.0], [37.0, 61.0], [39.0, 134.5], [38.0, 57.0], [41.0, 136.0], [40.0, 62.0], [42.0, 120.0], [43.0, 110.0], [45.0, 121.5], [44.0, 140.0], [47.0, 153.0], [46.0, 309.0], [48.0, 165.5], [49.0, 244.5], [3.0, 18.0], [51.0, 174.0], [50.0, 182.5], [68.0, 53.0], [6.0, 506.0], [7.0, 273.0], [8.0, 426.5], [9.0, 795.0], [10.0, 603.0], [11.0, 137.0], [12.0, 389.0], [13.0, 341.0], [16.0, 1420.0], [18.0, 300.0], [19.0, 464.0], [20.0, 115.0], [21.0, 392.0], [22.0, 116.0], [23.0, 166.0], [24.0, 63.0], [25.0, 348.5], [26.0, 355.5], [27.0, 56.5], [28.0, 39.5], [29.0, 171.0], [30.0, 121.5], [31.0, 98.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 68.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 18.0, "minX": 2.0, "maxY": 1420.0, "series": [{"data": [[33.0, 126.0], [32.0, 90.5], [2.0, 1057.0], [35.0, 52.0], [34.0, 50.0], [36.0, 49.0], [37.0, 61.0], [39.0, 133.5], [38.0, 56.5], [41.0, 136.0], [40.0, 62.0], [42.0, 120.0], [43.0, 110.0], [45.0, 121.5], [44.0, 140.0], [47.0, 153.0], [46.0, 309.0], [48.0, 165.5], [49.0, 244.5], [3.0, 18.0], [51.0, 174.0], [50.0, 182.5], [68.0, 53.0], [6.0, 503.0], [7.0, 272.0], [8.0, 424.5], [9.0, 794.5], [10.0, 603.0], [11.0, 136.5], [12.0, 389.0], [13.0, 341.0], [16.0, 1420.0], [18.0, 300.0], [19.0, 464.0], [20.0, 115.0], [21.0, 392.0], [22.0, 116.0], [23.0, 166.0], [24.0, 63.0], [25.0, 348.5], [26.0, 355.0], [27.0, 56.5], [28.0, 39.5], [29.0, 171.0], [30.0, 121.5], [31.0, 98.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 68.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.283333333333333, "minX": 1.64824188E12, "maxY": 39.4, "series": [{"data": [[1.648242E12, 35.916666666666664], [1.64824218E12, 39.4], [1.64824236E12, 35.55], [1.64824188E12, 9.25], [1.64824206E12, 35.05], [1.64824224E12, 37.233333333333334], [1.64824194E12, 37.31666666666667], [1.64824242E12, 3.283333333333333], [1.64824212E12, 32.333333333333336], [1.6482423E12, 34.666666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.4, "minX": 1.64824188E12, "maxY": 39.56666666666667, "series": [{"data": [[1.648242E12, 35.916666666666664], [1.64824218E12, 39.56666666666667], [1.64824236E12, 35.516666666666666], [1.64824188E12, 9.15], [1.64824206E12, 34.983333333333334], [1.64824224E12, 37.31666666666667], [1.64824194E12, 37.4], [1.64824242E12, 3.4], [1.64824212E12, 32.15], [1.6482423E12, 34.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.4, "minX": 1.64824188E12, "maxY": 39.56666666666667, "series": [{"data": [[1.648242E12, 35.916666666666664], [1.64824218E12, 39.56666666666667], [1.64824236E12, 35.516666666666666], [1.64824188E12, 9.15], [1.64824206E12, 34.983333333333334], [1.64824224E12, 37.31666666666667], [1.64824194E12, 37.4], [1.64824242E12, 3.4], [1.64824212E12, 32.15], [1.6482423E12, 34.6]], "isOverall": false, "label": "HTTP Request for search path-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.4, "minX": 1.64824188E12, "maxY": 39.56666666666667, "series": [{"data": [[1.648242E12, 35.916666666666664], [1.64824218E12, 39.56666666666667], [1.64824236E12, 35.516666666666666], [1.64824188E12, 9.15], [1.64824206E12, 34.983333333333334], [1.64824224E12, 37.31666666666667], [1.64824194E12, 37.4], [1.64824242E12, 3.4], [1.64824212E12, 32.15], [1.6482423E12, 34.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Total Transactions Per Second"}},
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

