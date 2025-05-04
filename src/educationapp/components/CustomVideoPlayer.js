// import Slider from '@react-native-community/slider';
// import React, { useRef, useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Video from 'react-native-video';

// const CustomVideoPlayer = ({ videoUrl }) => {
//   const videoRef = useRef(null);
//   const [rate, setRate] = useState(1.0); // Playback speed
//   const [muted, setMuted] = useState(false); // Mute state
//   const [volume, setVolume] = useState(1.0); // Volume (0.0 to 1.0)

//   return (
//     <View style={styles.container}>
//       <Video
//         ref={videoRef}
//         source={{ uri: videoUrl }}
//         style={styles.video}
//         resizeMode="contain"
//         controls
//         muted={muted}
//         volume={volume}
//         rate={rate}
//       />

//       <View style={styles.controls}>

//         {/* Mute/Unmute */}
//         <TouchableOpacity onPress={() => setMuted(!muted)} style={styles.button}>
//           <Text>{muted ? 'Unmute' : 'Mute'}</Text>
//         </TouchableOpacity>

//         {/* Speed Buttons */}
//         <View style={styles.speedButtons}>
//           {[0.5, 1.0, 1.5, 2.0].map((s) => (
//             <TouchableOpacity key={s} onPress={() => setRate(s)} style={styles.button}>
//               <Text>{s}x</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Volume Slider */}
//         <View style={styles.sliderContainer}>
//           <Text>Volume</Text>
//           <Slider
//             style={{ width: 200 }}
//             minimumValue={0}
//             maximumValue={1}
//             value={volume}
//             onValueChange={(val) => setVolume(val)}
//           />
//         </View>

//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#000', padding: 10 },
//   video: { width: '100%', height: 250, backgroundColor: '#000' },
//   controls: { marginTop: 20 },
//   button: {
//     padding: 10,
//     margin: 5,
//     backgroundColor: '#eee',
//     borderRadius: 5,
//     alignItems: 'center'
//   },
//   speedButtons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 10
//   },
//   sliderContainer: {
//     alignItems: 'center',
//     marginVertical: 10
//   }
// });

// export default CustomVideoPlayer;

import Slider from '@react-native-community/slider';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video';

const { width } = Dimensions.get('window');

const CustomVideoPlayer = ({ videoUrl }) => {
  // Refs
  const videoRef = useRef(null);
  const controlTimeoutRef = useRef(null);

  // States
  const [paused, setPaused] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [rate, setRate] = useState(1.0);

  // Auto-hide controls after 3 seconds of inactivity
  useEffect(() => {
    if (showControls && !paused) {
      resetControlsTimeout();
    }
    return () => {
      if (controlTimeoutRef.current) {
        clearTimeout(controlTimeoutRef.current);
      }
    };
  }, [showControls, paused]);

  const resetControlsTimeout = () => {
    if (controlTimeoutRef.current) {
      clearTimeout(controlTimeoutRef.current);
    }
    controlTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  // Format time to MM:SS
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Video event handlers
  const handleLoad = (data) => {
    setDuration(data.duration);
    setLoading(false);
  };

  const handleProgress = (data) => {
    setProgress(data.currentTime);
  };

  const handleEnd = () => {
    setPaused(true);
    setProgress(0);
    videoRef.current.seek(0);
  };

  const handleError = (err) => {
    console.error("Video Player Error:", err);
    setLoading(false);
  };

  // Control handlers
  const togglePlayPause = () => {
    setPaused(!paused);
    showControlsTemporarily();
  };

  const toggleMute = () => {
    setMuted(!muted);
    showControlsTemporarily();
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    resetControlsTimeout();
  };

  const toggleControls = () => {
    setShowControls(!showControls);
    if (!showControls) {
      resetControlsTimeout();
    }
  };

  const handleSliderChange = (value) => {
    videoRef.current.seek(value);
    setProgress(value);
    showControlsTemporarily();
  };

  const skipForward = () => {
    const newTime = Math.min(progress + 10, duration);
    videoRef.current.seek(newTime);
    setProgress(newTime);
    showControlsTemporarily();
  };

  const skipBackward = () => {
    const newTime = Math.max(progress - 10, 0);
    videoRef.current.seek(newTime);
    setProgress(newTime);
    showControlsTemporarily();
  };

  const restart = () => {
    videoRef.current.seek(0);
    setProgress(0);
    setPaused(false);
    showControlsTemporarily();
  };

  const changeSpeed = () => {
    // Cycle through common speed values
    const speeds = [0.5, 1.0, 1.5, 2.0];
    const currentIndex = speeds.indexOf(rate);
    const nextIndex = (currentIndex + 1) % speeds.length;
    setRate(speeds[nextIndex]);
    showControlsTemporarily();
  };

  const changeVolume = (value) => {
    setVolume(value);
    if (value === 0) {
      setMuted(true);
    } else if (muted) {
      setMuted(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleControls}>
        <View style={styles.videoContainer}>
          <Video
            ref={videoRef}
            source={{ uri: videoUrl }}
            style={styles.video}
            resizeMode="contain"
            paused={paused}
            onLoad={handleLoad}
            onProgress={handleProgress}
            onEnd={handleEnd}
            onError={handleError}
            volume={volume}
            muted={muted}
            rate={rate}
            repeat={false}
          />

          {loading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#FFFFFF" />
            </View>
          )}

          {showControls && (
            <View style={styles.controlsContainer}>
              {/* Top Row - Speed & Restart */}
              <View style={styles.topRow}>
                <TouchableOpacity style={styles.controlButton} onPress={restart}>
                  <Icon name="replay" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.speedButton} onPress={changeSpeed}>
                  <Text style={styles.speedText}>{rate}x</Text>
                </TouchableOpacity>
              </View>

              {/* Middle Row - Skip Back, Play/Pause, Skip Forward */}
              <View style={styles.middleRow}>
                <TouchableOpacity style={styles.skipButton} onPress={skipBackward}>
                  <Icon name="replay-10" size={40} color="#FFFFFF" />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.playPauseButton} onPress={togglePlayPause}>
                  <Icon 
                    name={paused ? "play-arrow" : "pause"} 
                    size={50} 
                    color="#FFFFFF" 
                  />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.skipButton} onPress={skipForward}>
                  <Icon name="forward-10" size={40} color="#FFFFFF" />
                </TouchableOpacity>
              </View>

              {/* Bottom Row - Progress Bar & Volume */}
              <View style={styles.bottomRow}>
                <Text style={styles.timeText}>{formatTime(progress)}</Text>
                
                <Slider
                  style={styles.progressBar}
                  value={progress}
                  minimumValue={0}
                  maximumValue={duration}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="rgba(255, 255, 255, 0.5)"
                  thumbTintColor="#FFFFFF"
                  onValueChange={handleSliderChange}
                />
                
                <Text style={styles.timeText}>{formatTime(duration)}</Text>
              </View>

              {/* Volume Control */}
              <View style={styles.volumeRow}>
                <TouchableOpacity onPress={toggleMute} style={styles.volumeButton}>
                  <Icon 
                    name={muted ? "volume-off" : volume > 0.5 ? "volume-up" : "volume-down"} 
                    size={24} 
                    color="#FFFFFF" 
                  />
                </TouchableOpacity>
                
                <Slider
                  style={styles.volumeSlider}
                  value={volume}
                  minimumValue={0}
                  maximumValue={1}
                  step={0.05}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="rgba(255, 255, 255, 0.5)"
                  thumbTintColor="#FFFFFF"
                  onValueChange={changeVolume}
                />
              </View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderRadius: 8,
    overflow: 'hidden',
  },
  videoContainer: {
    position: 'relative',
    width: width,
    height: width * 9/16, // 16:9 aspect ratio
  },
  video: {
    width: '100%',
    height: '100%',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  controlsContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-between',
    padding: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  volumeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playPauseButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30,
    padding: 5,
    marginHorizontal: 20,
  },
  skipButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    padding: 5,
  },
  controlButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 5,
  },
  progressBar: {
    flex: 1,
    marginHorizontal: 5,
    height: 40,
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  volumeButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 5,
    marginRight: 5,
  },
  volumeSlider: {
    flex: 1,
    height: 40,
  },
  speedButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  speedText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CustomVideoPlayer;
