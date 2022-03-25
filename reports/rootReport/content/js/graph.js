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
        data: {"result": {"minY": 32.0, "minX": 0.0, "maxY": 2062.0, "series": [{"data": [[0.0, 32.0], [0.1, 35.0], [0.2, 36.0], [0.3, 37.0], [0.4, 37.0], [0.5, 38.0], [0.6, 38.0], [0.7, 38.0], [0.8, 39.0], [0.9, 39.0], [1.0, 39.0], [1.1, 40.0], [1.2, 40.0], [1.3, 40.0], [1.4, 40.0], [1.5, 41.0], [1.6, 41.0], [1.7, 41.0], [1.8, 41.0], [1.9, 41.0], [2.0, 41.0], [2.1, 42.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 43.0], [2.8, 43.0], [2.9, 43.0], [3.0, 43.0], [3.1, 43.0], [3.2, 43.0], [3.3, 43.0], [3.4, 44.0], [3.5, 44.0], [3.6, 44.0], [3.7, 44.0], [3.8, 44.0], [3.9, 44.0], [4.0, 44.0], [4.1, 44.0], [4.2, 44.0], [4.3, 45.0], [4.4, 45.0], [4.5, 45.0], [4.6, 45.0], [4.7, 45.0], [4.8, 45.0], [4.9, 45.0], [5.0, 45.0], [5.1, 45.0], [5.2, 45.0], [5.3, 46.0], [5.4, 46.0], [5.5, 46.0], [5.6, 46.0], [5.7, 46.0], [5.8, 46.0], [5.9, 46.0], [6.0, 46.0], [6.1, 46.0], [6.2, 46.0], [6.3, 47.0], [6.4, 47.0], [6.5, 47.0], [6.6, 47.0], [6.7, 47.0], [6.8, 47.0], [6.9, 47.0], [7.0, 47.0], [7.1, 47.0], [7.2, 47.0], [7.3, 48.0], [7.4, 48.0], [7.5, 48.0], [7.6, 48.0], [7.7, 48.0], [7.8, 48.0], [7.9, 48.0], [8.0, 48.0], [8.1, 48.0], [8.2, 48.0], [8.3, 49.0], [8.4, 49.0], [8.5, 49.0], [8.6, 49.0], [8.7, 49.0], [8.8, 49.0], [8.9, 49.0], [9.0, 49.0], [9.1, 49.0], [9.2, 49.0], [9.3, 49.0], [9.4, 49.0], [9.5, 50.0], [9.6, 50.0], [9.7, 50.0], [9.8, 50.0], [9.9, 50.0], [10.0, 50.0], [10.1, 50.0], [10.2, 50.0], [10.3, 50.0], [10.4, 50.0], [10.5, 50.0], [10.6, 51.0], [10.7, 51.0], [10.8, 51.0], [10.9, 51.0], [11.0, 51.0], [11.1, 51.0], [11.2, 51.0], [11.3, 51.0], [11.4, 51.0], [11.5, 51.0], [11.6, 51.0], [11.7, 51.0], [11.8, 52.0], [11.9, 52.0], [12.0, 52.0], [12.1, 52.0], [12.2, 52.0], [12.3, 52.0], [12.4, 52.0], [12.5, 52.0], [12.6, 52.0], [12.7, 52.0], [12.8, 52.0], [12.9, 52.0], [13.0, 53.0], [13.1, 53.0], [13.2, 53.0], [13.3, 53.0], [13.4, 53.0], [13.5, 53.0], [13.6, 53.0], [13.7, 53.0], [13.8, 53.0], [13.9, 53.0], [14.0, 53.0], [14.1, 53.0], [14.2, 53.0], [14.3, 54.0], [14.4, 54.0], [14.5, 54.0], [14.6, 54.0], [14.7, 54.0], [14.8, 54.0], [14.9, 54.0], [15.0, 54.0], [15.1, 54.0], [15.2, 54.0], [15.3, 55.0], [15.4, 55.0], [15.5, 55.0], [15.6, 55.0], [15.7, 55.0], [15.8, 55.0], [15.9, 55.0], [16.0, 55.0], [16.1, 55.0], [16.2, 55.0], [16.3, 56.0], [16.4, 56.0], [16.5, 56.0], [16.6, 56.0], [16.7, 56.0], [16.8, 56.0], [16.9, 56.0], [17.0, 56.0], [17.1, 56.0], [17.2, 56.0], [17.3, 56.0], [17.4, 56.0], [17.5, 56.0], [17.6, 57.0], [17.7, 57.0], [17.8, 57.0], [17.9, 57.0], [18.0, 57.0], [18.1, 57.0], [18.2, 57.0], [18.3, 57.0], [18.4, 57.0], [18.5, 57.0], [18.6, 57.0], [18.7, 57.0], [18.8, 57.0], [18.9, 58.0], [19.0, 58.0], [19.1, 58.0], [19.2, 58.0], [19.3, 58.0], [19.4, 58.0], [19.5, 58.0], [19.6, 58.0], [19.7, 58.0], [19.8, 58.0], [19.9, 58.0], [20.0, 58.0], [20.1, 59.0], [20.2, 59.0], [20.3, 59.0], [20.4, 59.0], [20.5, 59.0], [20.6, 59.0], [20.7, 59.0], [20.8, 59.0], [20.9, 59.0], [21.0, 60.0], [21.1, 60.0], [21.2, 60.0], [21.3, 60.0], [21.4, 60.0], [21.5, 60.0], [21.6, 60.0], [21.7, 60.0], [21.8, 60.0], [21.9, 60.0], [22.0, 61.0], [22.1, 61.0], [22.2, 61.0], [22.3, 61.0], [22.4, 61.0], [22.5, 61.0], [22.6, 61.0], [22.7, 61.0], [22.8, 61.0], [22.9, 61.0], [23.0, 61.0], [23.1, 61.0], [23.2, 62.0], [23.3, 62.0], [23.4, 62.0], [23.5, 62.0], [23.6, 62.0], [23.7, 62.0], [23.8, 62.0], [23.9, 62.0], [24.0, 62.0], [24.1, 62.0], [24.2, 63.0], [24.3, 63.0], [24.4, 63.0], [24.5, 63.0], [24.6, 63.0], [24.7, 63.0], [24.8, 63.0], [24.9, 63.0], [25.0, 63.0], [25.1, 63.0], [25.2, 63.0], [25.3, 64.0], [25.4, 64.0], [25.5, 64.0], [25.6, 64.0], [25.7, 64.0], [25.8, 64.0], [25.9, 64.0], [26.0, 64.0], [26.1, 65.0], [26.2, 65.0], [26.3, 65.0], [26.4, 65.0], [26.5, 65.0], [26.6, 65.0], [26.7, 65.0], [26.8, 66.0], [26.9, 66.0], [27.0, 66.0], [27.1, 66.0], [27.2, 66.0], [27.3, 66.0], [27.4, 66.0], [27.5, 67.0], [27.6, 67.0], [27.7, 67.0], [27.8, 67.0], [27.9, 67.0], [28.0, 67.0], [28.1, 67.0], [28.2, 67.0], [28.3, 68.0], [28.4, 68.0], [28.5, 68.0], [28.6, 68.0], [28.7, 68.0], [28.8, 68.0], [28.9, 69.0], [29.0, 69.0], [29.1, 69.0], [29.2, 69.0], [29.3, 69.0], [29.4, 70.0], [29.5, 70.0], [29.6, 70.0], [29.7, 70.0], [29.8, 71.0], [29.9, 71.0], [30.0, 71.0], [30.1, 71.0], [30.2, 71.0], [30.3, 72.0], [30.4, 72.0], [30.5, 72.0], [30.6, 72.0], [30.7, 72.0], [30.8, 72.0], [30.9, 73.0], [31.0, 73.0], [31.1, 73.0], [31.2, 73.0], [31.3, 73.0], [31.4, 74.0], [31.5, 74.0], [31.6, 74.0], [31.7, 74.0], [31.8, 75.0], [31.9, 75.0], [32.0, 75.0], [32.1, 75.0], [32.2, 75.0], [32.3, 76.0], [32.4, 76.0], [32.5, 76.0], [32.6, 76.0], [32.7, 76.0], [32.8, 77.0], [32.9, 77.0], [33.0, 77.0], [33.1, 77.0], [33.2, 78.0], [33.3, 78.0], [33.4, 78.0], [33.5, 79.0], [33.6, 79.0], [33.7, 79.0], [33.8, 79.0], [33.9, 80.0], [34.0, 80.0], [34.1, 80.0], [34.2, 81.0], [34.3, 81.0], [34.4, 81.0], [34.5, 82.0], [34.6, 82.0], [34.7, 82.0], [34.8, 82.0], [34.9, 83.0], [35.0, 83.0], [35.1, 83.0], [35.2, 83.0], [35.3, 84.0], [35.4, 84.0], [35.5, 84.0], [35.6, 84.0], [35.7, 84.0], [35.8, 85.0], [35.9, 85.0], [36.0, 85.0], [36.1, 86.0], [36.2, 86.0], [36.3, 86.0], [36.4, 87.0], [36.5, 87.0], [36.6, 87.0], [36.7, 88.0], [36.8, 88.0], [36.9, 88.0], [37.0, 89.0], [37.1, 89.0], [37.2, 89.0], [37.3, 90.0], [37.4, 90.0], [37.5, 91.0], [37.6, 91.0], [37.7, 91.0], [37.8, 92.0], [37.9, 92.0], [38.0, 93.0], [38.1, 93.0], [38.2, 93.0], [38.3, 94.0], [38.4, 94.0], [38.5, 94.0], [38.6, 94.0], [38.7, 94.0], [38.8, 95.0], [38.9, 95.0], [39.0, 95.0], [39.1, 96.0], [39.2, 96.0], [39.3, 96.0], [39.4, 97.0], [39.5, 97.0], [39.6, 97.0], [39.7, 98.0], [39.8, 98.0], [39.9, 98.0], [40.0, 99.0], [40.1, 99.0], [40.2, 99.0], [40.3, 100.0], [40.4, 100.0], [40.5, 100.0], [40.6, 101.0], [40.7, 101.0], [40.8, 102.0], [40.9, 102.0], [41.0, 102.0], [41.1, 103.0], [41.2, 103.0], [41.3, 103.0], [41.4, 104.0], [41.5, 104.0], [41.6, 104.0], [41.7, 105.0], [41.8, 105.0], [41.9, 106.0], [42.0, 106.0], [42.1, 106.0], [42.2, 107.0], [42.3, 107.0], [42.4, 107.0], [42.5, 108.0], [42.6, 108.0], [42.7, 108.0], [42.8, 109.0], [42.9, 109.0], [43.0, 109.0], [43.1, 110.0], [43.2, 110.0], [43.3, 111.0], [43.4, 111.0], [43.5, 111.0], [43.6, 112.0], [43.7, 112.0], [43.8, 113.0], [43.9, 113.0], [44.0, 113.0], [44.1, 114.0], [44.2, 114.0], [44.3, 115.0], [44.4, 115.0], [44.5, 115.0], [44.6, 116.0], [44.7, 116.0], [44.8, 117.0], [44.9, 118.0], [45.0, 118.0], [45.1, 119.0], [45.2, 119.0], [45.3, 119.0], [45.4, 120.0], [45.5, 120.0], [45.6, 120.0], [45.7, 121.0], [45.8, 121.0], [45.9, 122.0], [46.0, 122.0], [46.1, 122.0], [46.2, 123.0], [46.3, 123.0], [46.4, 124.0], [46.5, 124.0], [46.6, 125.0], [46.7, 125.0], [46.8, 125.0], [46.9, 126.0], [47.0, 126.0], [47.1, 126.0], [47.2, 127.0], [47.3, 127.0], [47.4, 127.0], [47.5, 127.0], [47.6, 128.0], [47.7, 128.0], [47.8, 129.0], [47.9, 129.0], [48.0, 129.0], [48.1, 130.0], [48.2, 130.0], [48.3, 131.0], [48.4, 131.0], [48.5, 131.0], [48.6, 132.0], [48.7, 132.0], [48.8, 133.0], [48.9, 133.0], [49.0, 134.0], [49.1, 134.0], [49.2, 135.0], [49.3, 135.0], [49.4, 135.0], [49.5, 136.0], [49.6, 136.0], [49.7, 137.0], [49.8, 137.0], [49.9, 137.0], [50.0, 138.0], [50.1, 138.0], [50.2, 139.0], [50.3, 139.0], [50.4, 140.0], [50.5, 140.0], [50.6, 140.0], [50.7, 141.0], [50.8, 141.0], [50.9, 142.0], [51.0, 142.0], [51.1, 143.0], [51.2, 143.0], [51.3, 143.0], [51.4, 144.0], [51.5, 144.0], [51.6, 144.0], [51.7, 145.0], [51.8, 145.0], [51.9, 146.0], [52.0, 146.0], [52.1, 146.0], [52.2, 147.0], [52.3, 147.0], [52.4, 147.0], [52.5, 148.0], [52.6, 148.0], [52.7, 148.0], [52.8, 149.0], [52.9, 149.0], [53.0, 149.0], [53.1, 150.0], [53.2, 150.0], [53.3, 150.0], [53.4, 151.0], [53.5, 151.0], [53.6, 151.0], [53.7, 152.0], [53.8, 152.0], [53.9, 152.0], [54.0, 153.0], [54.1, 153.0], [54.2, 154.0], [54.3, 154.0], [54.4, 154.0], [54.5, 155.0], [54.6, 155.0], [54.7, 155.0], [54.8, 156.0], [54.9, 156.0], [55.0, 157.0], [55.1, 157.0], [55.2, 157.0], [55.3, 158.0], [55.4, 158.0], [55.5, 159.0], [55.6, 159.0], [55.7, 159.0], [55.8, 159.0], [55.9, 160.0], [56.0, 160.0], [56.1, 160.0], [56.2, 161.0], [56.3, 161.0], [56.4, 161.0], [56.5, 162.0], [56.6, 162.0], [56.7, 162.0], [56.8, 163.0], [56.9, 163.0], [57.0, 163.0], [57.1, 163.0], [57.2, 164.0], [57.3, 164.0], [57.4, 165.0], [57.5, 165.0], [57.6, 165.0], [57.7, 165.0], [57.8, 166.0], [57.9, 166.0], [58.0, 167.0], [58.1, 167.0], [58.2, 167.0], [58.3, 168.0], [58.4, 168.0], [58.5, 169.0], [58.6, 169.0], [58.7, 169.0], [58.8, 169.0], [58.9, 170.0], [59.0, 170.0], [59.1, 171.0], [59.2, 171.0], [59.3, 172.0], [59.4, 172.0], [59.5, 172.0], [59.6, 173.0], [59.7, 173.0], [59.8, 173.0], [59.9, 173.0], [60.0, 174.0], [60.1, 174.0], [60.2, 175.0], [60.3, 175.0], [60.4, 176.0], [60.5, 176.0], [60.6, 177.0], [60.7, 177.0], [60.8, 178.0], [60.9, 178.0], [61.0, 179.0], [61.1, 179.0], [61.2, 180.0], [61.3, 180.0], [61.4, 181.0], [61.5, 181.0], [61.6, 182.0], [61.7, 182.0], [61.8, 183.0], [61.9, 183.0], [62.0, 183.0], [62.1, 184.0], [62.2, 184.0], [62.3, 184.0], [62.4, 185.0], [62.5, 185.0], [62.6, 186.0], [62.7, 186.0], [62.8, 187.0], [62.9, 188.0], [63.0, 188.0], [63.1, 188.0], [63.2, 189.0], [63.3, 189.0], [63.4, 189.0], [63.5, 190.0], [63.6, 191.0], [63.7, 192.0], [63.8, 192.0], [63.9, 193.0], [64.0, 193.0], [64.1, 193.0], [64.2, 194.0], [64.3, 194.0], [64.4, 195.0], [64.5, 195.0], [64.6, 195.0], [64.7, 196.0], [64.8, 196.0], [64.9, 197.0], [65.0, 197.0], [65.1, 198.0], [65.2, 198.0], [65.3, 198.0], [65.4, 199.0], [65.5, 199.0], [65.6, 199.0], [65.7, 200.0], [65.8, 200.0], [65.9, 200.0], [66.0, 201.0], [66.1, 202.0], [66.2, 202.0], [66.3, 203.0], [66.4, 203.0], [66.5, 204.0], [66.6, 204.0], [66.7, 204.0], [66.8, 205.0], [66.9, 205.0], [67.0, 206.0], [67.1, 206.0], [67.2, 207.0], [67.3, 207.0], [67.4, 207.0], [67.5, 207.0], [67.6, 208.0], [67.7, 208.0], [67.8, 208.0], [67.9, 209.0], [68.0, 209.0], [68.1, 209.0], [68.2, 210.0], [68.3, 210.0], [68.4, 210.0], [68.5, 211.0], [68.6, 211.0], [68.7, 212.0], [68.8, 212.0], [68.9, 212.0], [69.0, 213.0], [69.1, 213.0], [69.2, 213.0], [69.3, 214.0], [69.4, 214.0], [69.5, 214.0], [69.6, 216.0], [69.7, 216.0], [69.8, 216.0], [69.9, 216.0], [70.0, 217.0], [70.1, 217.0], [70.2, 218.0], [70.3, 218.0], [70.4, 218.0], [70.5, 219.0], [70.6, 220.0], [70.7, 220.0], [70.8, 220.0], [70.9, 221.0], [71.0, 222.0], [71.1, 222.0], [71.2, 222.0], [71.3, 223.0], [71.4, 223.0], [71.5, 224.0], [71.6, 224.0], [71.7, 225.0], [71.8, 225.0], [71.9, 226.0], [72.0, 226.0], [72.1, 226.0], [72.2, 227.0], [72.3, 228.0], [72.4, 228.0], [72.5, 228.0], [72.6, 229.0], [72.7, 229.0], [72.8, 230.0], [72.9, 230.0], [73.0, 231.0], [73.1, 231.0], [73.2, 232.0], [73.3, 232.0], [73.4, 233.0], [73.5, 234.0], [73.6, 234.0], [73.7, 235.0], [73.8, 235.0], [73.9, 236.0], [74.0, 236.0], [74.1, 237.0], [74.2, 237.0], [74.3, 238.0], [74.4, 239.0], [74.5, 239.0], [74.6, 240.0], [74.7, 240.0], [74.8, 241.0], [74.9, 241.0], [75.0, 242.0], [75.1, 243.0], [75.2, 243.0], [75.3, 244.0], [75.4, 245.0], [75.5, 246.0], [75.6, 246.0], [75.7, 247.0], [75.8, 247.0], [75.9, 248.0], [76.0, 248.0], [76.1, 249.0], [76.2, 250.0], [76.3, 250.0], [76.4, 251.0], [76.5, 252.0], [76.6, 253.0], [76.7, 254.0], [76.8, 255.0], [76.9, 255.0], [77.0, 256.0], [77.1, 257.0], [77.2, 257.0], [77.3, 258.0], [77.4, 259.0], [77.5, 259.0], [77.6, 260.0], [77.7, 261.0], [77.8, 262.0], [77.9, 262.0], [78.0, 263.0], [78.1, 264.0], [78.2, 265.0], [78.3, 266.0], [78.4, 267.0], [78.5, 268.0], [78.6, 269.0], [78.7, 270.0], [78.8, 270.0], [78.9, 271.0], [79.0, 272.0], [79.1, 273.0], [79.2, 274.0], [79.3, 274.0], [79.4, 275.0], [79.5, 277.0], [79.6, 279.0], [79.7, 280.0], [79.8, 282.0], [79.9, 282.0], [80.0, 283.0], [80.1, 284.0], [80.2, 286.0], [80.3, 286.0], [80.4, 287.0], [80.5, 288.0], [80.6, 289.0], [80.7, 291.0], [80.8, 293.0], [80.9, 294.0], [81.0, 295.0], [81.1, 296.0], [81.2, 297.0], [81.3, 299.0], [81.4, 300.0], [81.5, 301.0], [81.6, 302.0], [81.7, 304.0], [81.8, 305.0], [81.9, 307.0], [82.0, 310.0], [82.1, 312.0], [82.2, 313.0], [82.3, 316.0], [82.4, 317.0], [82.5, 320.0], [82.6, 321.0], [82.7, 324.0], [82.8, 327.0], [82.9, 329.0], [83.0, 330.0], [83.1, 334.0], [83.2, 335.0], [83.3, 337.0], [83.4, 339.0], [83.5, 343.0], [83.6, 345.0], [83.7, 346.0], [83.8, 348.0], [83.9, 351.0], [84.0, 353.0], [84.1, 355.0], [84.2, 358.0], [84.3, 360.0], [84.4, 362.0], [84.5, 363.0], [84.6, 366.0], [84.7, 368.0], [84.8, 370.0], [84.9, 372.0], [85.0, 375.0], [85.1, 377.0], [85.2, 380.0], [85.3, 381.0], [85.4, 384.0], [85.5, 385.0], [85.6, 387.0], [85.7, 389.0], [85.8, 391.0], [85.9, 394.0], [86.0, 396.0], [86.1, 397.0], [86.2, 398.0], [86.3, 400.0], [86.4, 402.0], [86.5, 403.0], [86.6, 406.0], [86.7, 408.0], [86.8, 410.0], [86.9, 412.0], [87.0, 414.0], [87.1, 415.0], [87.2, 416.0], [87.3, 417.0], [87.4, 419.0], [87.5, 422.0], [87.6, 423.0], [87.7, 424.0], [87.8, 425.0], [87.9, 427.0], [88.0, 429.0], [88.1, 430.0], [88.2, 433.0], [88.3, 435.0], [88.4, 437.0], [88.5, 438.0], [88.6, 439.0], [88.7, 441.0], [88.8, 443.0], [88.9, 444.0], [89.0, 445.0], [89.1, 447.0], [89.2, 450.0], [89.3, 451.0], [89.4, 452.0], [89.5, 455.0], [89.6, 456.0], [89.7, 458.0], [89.8, 459.0], [89.9, 461.0], [90.0, 463.0], [90.1, 464.0], [90.2, 466.0], [90.3, 468.0], [90.4, 469.0], [90.5, 471.0], [90.6, 473.0], [90.7, 475.0], [90.8, 477.0], [90.9, 480.0], [91.0, 482.0], [91.1, 482.0], [91.2, 484.0], [91.3, 486.0], [91.4, 488.0], [91.5, 491.0], [91.6, 492.0], [91.7, 493.0], [91.8, 495.0], [91.9, 496.0], [92.0, 497.0], [92.1, 499.0], [92.2, 502.0], [92.3, 504.0], [92.4, 506.0], [92.5, 507.0], [92.6, 508.0], [92.7, 509.0], [92.8, 511.0], [92.9, 512.0], [93.0, 514.0], [93.1, 516.0], [93.2, 517.0], [93.3, 520.0], [93.4, 522.0], [93.5, 523.0], [93.6, 526.0], [93.7, 528.0], [93.8, 530.0], [93.9, 531.0], [94.0, 533.0], [94.1, 536.0], [94.2, 538.0], [94.3, 541.0], [94.4, 543.0], [94.5, 545.0], [94.6, 547.0], [94.7, 549.0], [94.8, 552.0], [94.9, 554.0], [95.0, 557.0], [95.1, 559.0], [95.2, 561.0], [95.3, 563.0], [95.4, 566.0], [95.5, 568.0], [95.6, 571.0], [95.7, 574.0], [95.8, 577.0], [95.9, 578.0], [96.0, 582.0], [96.1, 583.0], [96.2, 587.0], [96.3, 590.0], [96.4, 594.0], [96.5, 599.0], [96.6, 602.0], [96.7, 606.0], [96.8, 611.0], [96.9, 614.0], [97.0, 618.0], [97.1, 621.0], [97.2, 625.0], [97.3, 630.0], [97.4, 633.0], [97.5, 636.0], [97.6, 640.0], [97.7, 645.0], [97.8, 654.0], [97.9, 660.0], [98.0, 667.0], [98.1, 675.0], [98.2, 685.0], [98.3, 694.0], [98.4, 704.0], [98.5, 710.0], [98.6, 717.0], [98.7, 726.0], [98.8, 743.0], [98.9, 770.0], [99.0, 786.0], [99.1, 817.0], [99.2, 858.0], [99.3, 912.0], [99.4, 1003.0], [99.5, 1101.0], [99.6, 1169.0], [99.7, 1266.0], [99.8, 1361.0], [99.9, 1514.0], [100.0, 2062.0]], "isOverall": false, "label": "HTTP Request for root path", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 3224.0, "series": [{"data": [[0.0, 3224.0], [600.0, 146.0], [700.0, 56.0], [200.0, 1255.0], [800.0, 19.0], [900.0, 8.0], [1000.0, 9.0], [1100.0, 14.0], [300.0, 390.0], [1200.0, 5.0], [1300.0, 8.0], [1400.0, 5.0], [1500.0, 2.0], [100.0, 2030.0], [400.0, 470.0], [1700.0, 4.0], [1800.0, 2.0], [500.0, 352.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request for root path", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 7372.0, "series": [{"data": [[0.0, 7372.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 619.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.2959830866807607, "minX": 1.64824188E12, "maxY": 7.966699314397641, "series": [{"data": [[1.648242E12, 1.7236704900938455], [1.64824218E12, 7.966699314397641], [1.64824236E12, 4.185877466251294], [1.64824188E12, 3.1148148148148125], [1.64824206E12, 1.2959830866807607], [1.64824224E12, 1.6420512820512825], [1.64824194E12, 2.4488752556237205], [1.64824242E12, 3.175438596491228], [1.64824212E12, 4.9698996655518375], [1.6482423E12, 1.345824411134902]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 43.333333333333336, "minX": 1.0, "maxY": 661.5652173913045, "series": [{"data": [[2.0, 43.333333333333336], [3.0, 50.76271186440677], [4.0, 60.34782608695647], [5.0, 66.49168797953968], [6.0, 107.02717391304344], [7.0, 93.87428571428575], [8.0, 120.08627450980399], [9.0, 210.78181818181818], [10.0, 120.66782006920418], [11.0, 157.7177914110429], [12.0, 152.39194139194146], [13.0, 179.51245551601446], [14.0, 173.3571428571429], [15.0, 181.97340425531908], [16.0, 266.54802259886986], [17.0, 201.83544303797476], [18.0, 240.7058823529412], [19.0, 227.61977186311773], [20.0, 247.41897233201576], [21.0, 266.9490445859873], [22.0, 261.8347107438016], [23.0, 286.8], [24.0, 293.6373626373626], [25.0, 306.7207207207209], [26.0, 363.4444444444444], [27.0, 390.7126436781609], [28.0, 333.94736842105266], [29.0, 411.5454545454545], [30.0, 408.2857142857142], [31.0, 374.46666666666664], [32.0, 409.076923076923], [33.0, 328.6], [34.0, 412.6666666666666], [35.0, 486.14285714285717], [36.0, 469.14285714285705], [37.0, 417.9642857142857], [38.0, 442.97619047619054], [39.0, 434.30612244897964], [40.0, 598.4999999999999], [41.0, 494.52238805970137], [42.0, 469.8095238095236], [43.0, 525.4642857142856], [44.0, 555.3396226415093], [45.0, 564.0], [46.0, 589.697674418605], [47.0, 590.8974358974358], [48.0, 661.5652173913045], [49.0, 582.7857142857144], [50.0, 572.2666666666668], [51.0, 596.3478260869565], [52.0, 622.0], [1.0, 49.0]], "isOverall": false, "label": "HTTP Request for root path", "isController": false}, {"data": [[15.150374999999947, 195.37587499999967]], "isOverall": false, "label": "HTTP Request for root path-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 52.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 113.05, "minX": 1.64824188E12, "maxY": 7112439.15, "series": [{"data": [[1.648242E12, 6680537.85], [1.64824218E12, 7112439.15], [1.64824236E12, 6708402.45], [1.64824188E12, 1880860.5], [1.64824206E12, 6589977.9], [1.64824224E12, 6791996.25], [1.64824194E12, 6812894.7], [1.64824242E12, 397070.55], [1.64824212E12, 6248636.55], [1.6482423E12, 6506384.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.648242E12, 1902.0166666666667], [1.64824218E12, 2024.9833333333333], [1.64824236E12, 1909.95], [1.64824188E12, 535.5], [1.64824206E12, 1876.2333333333333], [1.64824224E12, 1933.75], [1.64824194E12, 1939.7], [1.64824242E12, 113.05], [1.64824212E12, 1779.05], [1.6482423E12, 1852.4333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 75.72832980972521, "minX": 1.64824188E12, "maxY": 473.3496571988243, "series": [{"data": [[1.648242E12, 100.45881126173097], [1.64824218E12, 473.3496571988243], [1.64824236E12, 257.10072689511946], [1.64824188E12, 188.17407407407413], [1.64824206E12, 75.72832980972521], [1.64824224E12, 96.72410256410235], [1.64824194E12, 144.1584867075663], [1.64824242E12, 195.43859649122805], [1.64824212E12, 324.70234113712354], [1.6482423E12, 80.99785867237682]], "isOverall": false, "label": "HTTP Request for root path", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 63.6109936575053, "minX": 1.64824188E12, "maxY": 461.2987267384919, "series": [{"data": [[1.648242E12, 87.96976016684049], [1.64824218E12, 461.2987267384919], [1.64824236E12, 241.65835929387322], [1.64824188E12, 175.51481481481483], [1.64824206E12, 63.6109936575053], [1.64824224E12, 84.27794871794848], [1.64824194E12, 132.79856850715748], [1.64824242E12, 184.77192982456143], [1.64824212E12, 308.82497212932], [1.6482423E12, 68.81156316916484]], "isOverall": false, "label": "HTTP Request for root path", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03508771929824562, "minX": 1.64824188E12, "maxY": 0.05685618729096987, "series": [{"data": [[1.648242E12, 0.04692387904066734], [1.64824218E12, 0.04113614103819787], [1.64824236E12, 0.05192107995846312], [1.64824188E12, 0.051851851851851864], [1.64824206E12, 0.05073995771670193], [1.64824224E12, 0.047179487179487195], [1.64824194E12, 0.03885480572597135], [1.64824242E12, 0.03508771929824562], [1.64824212E12, 0.05685618729096987], [1.6482423E12, 0.04389721627408994]], "isOverall": false, "label": "HTTP Request for root path", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 32.0, "minX": 1.64824188E12, "maxY": 2062.0, "series": [{"data": [[1.648242E12, 682.0], [1.64824218E12, 2062.0], [1.64824236E12, 1169.0], [1.64824188E12, 625.0], [1.64824206E12, 484.0], [1.64824224E12, 601.0], [1.64824194E12, 1190.0], [1.64824242E12, 293.0], [1.64824212E12, 1828.0], [1.6482423E12, 717.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.648242E12, 162.0], [1.64824218E12, 636.0], [1.64824236E12, 357.0], [1.64824188E12, 299.9], [1.64824206E12, 113.0], [1.64824224E12, 162.0], [1.64824194E12, 223.10000000000002], [1.64824242E12, 264.2], [1.64824212E12, 557.0], [1.6482423E12, 141.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.648242E12, 404.4], [1.64824218E12, 1373.4799999999996], [1.64824236E12, 814.36], [1.64824188E12, 566.8000000000004], [1.64824206E12, 280.53], [1.64824224E12, 292.6400000000003], [1.64824194E12, 794.6100000000015], [1.64824242E12, 293.0], [1.64824212E12, 1337.1], [1.6482423E12, 480.0999999999992]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.648242E12, 192.0], [1.64824218E12, 703.8], [1.64824236E12, 442.5999999999999], [1.64824188E12, 410.9], [1.64824206E12, 158.64999999999998], [1.64824224E12, 184.39999999999986], [1.64824194E12, 240.04999999999995], [1.64824242E12, 277.4999999999999], [1.64824212E12, 717.4999999999995], [1.6482423E12, 170.25]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.648242E12, 33.0], [1.64824218E12, 135.0], [1.64824236E12, 119.0], [1.64824188E12, 38.0], [1.64824206E12, 34.0], [1.64824224E12, 34.0], [1.64824194E12, 32.0], [1.64824242E12, 91.0], [1.64824212E12, 94.0], [1.6482423E12, 34.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.648242E12, 88.0], [1.64824218E12, 468.0], [1.64824236E12, 234.0], [1.64824188E12, 206.5], [1.64824206E12, 62.0], [1.64824224E12, 77.0], [1.64824194E12, 131.0], [1.64824242E12, 204.0], [1.64824212E12, 233.0], [1.6482423E12, 61.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 59.0, "minX": 2.0, "maxY": 758.0, "series": [{"data": [[8.0, 236.5], [2.0, 746.5], [9.0, 442.0], [10.0, 131.5], [11.0, 142.5], [3.0, 603.0], [12.0, 189.0], [13.0, 254.0], [14.0, 134.5], [15.0, 119.0], [16.0, 59.0], [4.0, 758.0], [17.0, 126.0], [18.0, 173.0], [19.0, 205.0], [5.0, 433.5], [20.0, 198.0], [21.0, 225.0], [22.0, 212.5], [23.0, 218.0], [6.0, 689.0], [24.0, 149.5], [26.0, 428.5], [7.0, 329.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 49.0, "minX": 2.0, "maxY": 714.5, "series": [{"data": [[8.0, 217.0], [2.0, 538.0], [9.0, 406.0], [10.0, 115.5], [11.0, 123.5], [3.0, 556.0], [12.0, 165.0], [13.0, 239.0], [14.0, 118.5], [15.0, 99.0], [16.0, 49.0], [4.0, 714.5], [17.0, 114.0], [18.0, 162.5], [19.0, 189.0], [5.0, 400.0], [20.0, 186.5], [21.0, 215.0], [22.0, 203.0], [23.0, 208.0], [6.0, 646.5], [24.0, 140.0], [26.0, 416.5], [7.0, 302.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8666666666666667, "minX": 1.64824188E12, "maxY": 16.933333333333334, "series": [{"data": [[1.648242E12, 16.0], [1.64824218E12, 16.933333333333334], [1.64824236E12, 16.066666666666666], [1.64824188E12, 4.566666666666666], [1.64824206E12, 15.783333333333333], [1.64824224E12, 16.216666666666665], [1.64824194E12, 16.25], [1.64824242E12, 0.8666666666666667], [1.64824212E12, 15.05], [1.6482423E12, 15.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.64824188E12, "maxY": 17.016666666666666, "series": [{"data": [[1.648242E12, 15.983333333333333], [1.64824218E12, 17.016666666666666], [1.64824236E12, 16.05], [1.64824188E12, 4.5], [1.64824206E12, 15.766666666666667], [1.64824224E12, 16.25], [1.64824194E12, 16.3], [1.64824242E12, 0.95], [1.64824212E12, 14.95], [1.6482423E12, 15.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64824242E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.64824188E12, "maxY": 17.016666666666666, "series": [{"data": [[1.648242E12, 15.983333333333333], [1.64824218E12, 17.016666666666666], [1.64824236E12, 16.05], [1.64824188E12, 4.5], [1.64824206E12, 15.766666666666667], [1.64824224E12, 16.25], [1.64824194E12, 16.3], [1.64824242E12, 0.95], [1.64824212E12, 14.95], [1.6482423E12, 15.566666666666666]], "isOverall": false, "label": "HTTP Request for root path-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.64824188E12, "maxY": 17.016666666666666, "series": [{"data": [[1.648242E12, 15.983333333333333], [1.64824218E12, 17.016666666666666], [1.64824236E12, 16.05], [1.64824188E12, 4.5], [1.64824206E12, 15.766666666666667], [1.64824224E12, 16.25], [1.64824194E12, 16.3], [1.64824242E12, 0.95], [1.64824212E12, 14.95], [1.6482423E12, 15.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64824242E12, "title": "Total Transactions Per Second"}},
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

