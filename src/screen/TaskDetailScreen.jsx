import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import FooterNav from '../components/FooterNav';
import Header from '../components/Header';
import { TASKSDETAIL } from '../data/expandedTaskData';

const TaskDetailScreen = ({ route,navigation }) => {
  // Dummy task data matching the image
  console.log('id :',route.params);
  const {taskId} = route.params;
  const task = TASKSDETAIL.find((item)=>item.id === taskId);
  // const task = {
  //   id: '1',
  //   title: 'Install True Balance and get points',
  //   reward: 100,
  //   duration: '1 min',
  //   completions: 26,
  //   totalCompletions: 100,
  //   description: 'Hello Friend, Are you in urgent need of money? Quick loan for you in minutes from True Balance!',
  //   link: 'https://b418.app.goo.gl/twhCvMcmiF9748b6',
  //   earnings: [
  //     { type: 'Free User', points: 100 },
  //     { type: 'Premium User', points: 105, extra: '(+5% Extra Points)' },
  //     { type: 'Premium Plus User', points: 110, extra: '(+10% Extra Points)' }
  //   ],
  //   importantInfo: [
  //     'Fraudulent activity may result in account suspension.',
  //     'Maintain task actions for at least 30 days to avoid penalties.',
  //     'Rewards credited after verification (24-48 hours).'
  //   ],
  //   images: [
  //     require('../assets/images/card1.png'),
  //     require('../assets/images/card2.png'),
  //     require('../assets/images/card3.png'),
  //   ]
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <StatusBar backgroundColor="#4169e1" barStyle="light-content" />

      {/* Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/left-arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Task Header */}
        <View style={styles.taskHeader}>
          <View style={styles.logoContainer}>
            <Image source={task.logo} style={styles.logo} />
          </View>
          <View style={styles.taskTitleContainer}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskId}>Task ID · {task.id}</Text>
          </View>
        </View>

        {/* Task Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Image source={require('../assets/images/star.webp')} style={styles.statIcon} />
            <Text style={styles.statValue}>{task.reward} Points</Text>
            <Text style={styles.statLabel}>Reward</Text>
          </View>

          <View style={styles.statItem}>
            <Image source={require('../assets/images/clockIcon.png')} style={styles.statIcon} />
            <Text style={styles.statValue}>{task.duration}</Text>
            <Text style={styles.statLabel}>Duration</Text>
          </View>

          <View style={styles.statItem}>
            <Image source={require('../assets/images/usersIcon.jpg')} style={styles.statIcon} />
            <Text style={styles.statValue}>{task.completions}/{task.totalCompletions}</Text>
            <Text style={styles.statLabel}>Completions</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.startButton}>
            <Image source={require('../assets/images/task-icon.png')} style={styles.buttonIcon} />
            <Text style={styles.startButtonText}>Start Task</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareButton}>
            <Image source={require('../assets/images/share.png')} style={styles.buttonIcon} />
            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
        </View>

        {/* Media Options */}
        <View style={styles.mediaOptionsContainer}>
          <TouchableOpacity style={styles.mediaOption}>
            <Image source={require('../assets/images/githublogo.png')} style={styles.mediaIcon} />
            <Text style={styles.mediaText}>Image</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mediaOption}>
            <Image source={require('../assets/images/games.jpg')} style={styles.mediaIcon} />
            <Text style={styles.mediaText}>Website Link</Text>
          </TouchableOpacity>
        </View>

        {/* App Images */}
        <View>
          <Text style={styles.sectionTitle}>Images</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imagesScrollView}>
            {task.images.map((image, index) => (
              <Image key={index} source={image} style={styles.appImage} />
            ))}
          </ScrollView>
        </View>

        {/* Install Buttons */}
        <View style={styles.installButtonsContainer}>
          <TouchableOpacity style={styles.installButton}>
            <Text style={styles.installButtonText}>Refer And Earn</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.installButton}>
            <Text style={styles.installButtonText}>Install App</Text>
          </TouchableOpacity>
        </View>

        {/* About This Task */}
        <View>
          <Text style={styles.sectionTitle}>About This Task</Text>
          <Text style={styles.taskDescription}>{task.description}</Text>
          <Text style={styles.taskLink}>{task.link}</Text>
        </View>

        {/* Earnings */}
        <View style={styles.earningsContainer}>
          <Text style={styles.sectionTitle}>Earnings</Text>

          {task.earnings.map((item, index) => (
            <View key={index} style={styles.earningRow}>
              <View style={styles.earningType}>
                <Text style={[styles.earningTypeText,
                index === 0 ? styles.freeUserText :
                  index === 1 ? styles.premiumUserText :
                    styles.premiumPlusUserText]}>{item.type}</Text>
                {item.extra && <Text style={[styles.earningExtraText,
                index === 1 ? styles.premiumUserText :
                  styles.premiumPlusUserText]}>{item.extra}</Text>}
              </View>
              <View style={styles.pointsContainer}>
                <Text style={styles.pointsText}>{item.points}</Text>
                <Image source={require('../assets/images/star.webp')} style={styles.pointsIcon} />
              </View>
            </View>
          ))}
        </View>

        {/* Important Information */}
        <View style={styles.importantInfoContainer}>
          <Text style={styles.sectionTitle}>Important Information</Text>

          {task.importantInfo.map((info, index) => (
            <View key={index} style={styles.infoItem}>
              <View style={styles.infoIconContainer}>
                <Text style={styles.infoIcon}>!</Text>
              </View>
              <Text style={styles.infoText}>{info}</Text>
            </View>
          ))}
        </View>

        {/* Task Submission */}
        <View style={styles.submissionContainer}>
          <TouchableOpacity style={styles.chooseFileButton}>
            <Image source={require('../assets/images/camera.png')} style={styles.cameraIcon} />
            <Text style={styles.chooseFileText}>Choose File</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} disabled={true}>
            <Text style={styles.submitButtonText}>Submit Task</Text>
          </TouchableOpacity>
        </View>

        {/* Task Support */}
        <TouchableOpacity style={styles.supportContainer}>
          <Text style={styles.supportText}>Task Support</Text>
          <Image source={require('../assets/images/chevron-down.webp')} style={styles.supportIcon} />
        </TouchableOpacity>
      </ScrollView>
      <FooterNav/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  scrollView: {
    flex: 1,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  logo: {
    width: 40,
    height: 40,
  },
  taskTitleContainer: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  taskId: {
    fontSize: 14,
    color: '#4169E1',
    marginTop: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    width: 35,
    height: 35,
    marginBottom: 5,
  },
  statValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  statLabel: {
    fontSize: 12,
    color: '#888888',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  startButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 20,
    flex: 1,
    marginRight: 5,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  shareButton: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 20,
    flex: 1,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#4169E1',
  },
  shareButtonText: {
    color: '#4169E1',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  buttonIcon: {
    width: 18,
    height: 18,
  },
  mediaOptionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  mediaOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  mediaIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  mediaText: {
    fontSize: 14,
    color: '#000000',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop: 5,
  },
  imagesScrollView: {
    paddingLeft: 15,
  },
  appImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginRight: 10,
  },
  installButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  installButton: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  installButtonText: {
    color: '#000000',
    fontSize: 14,
  },
  taskDescription: {
    fontSize: 14,
    color: '#666666',
    paddingHorizontal: 15,
    lineHeight: 20,
  },
  taskLink: {
    fontSize: 14,
    color: '#4169E1',
    paddingHorizontal: 15,
    marginTop: 5,
    marginBottom: 15,
  },
  earningsContainer: {
    marginVertical: 10,
  },
  earningRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  earningType: {
    flex: 1,
  },
  earningTypeText: {
    fontSize: 14,
    fontWeight: '500',
  },
  earningExtraText: {
    fontSize: 12,
  },
  freeUserText: {
    color: '#4CAF50',
  },
  premiumUserText: {
    color: '#4169E1',
  },
  premiumPlusUserText: {
    color: '#FFA000',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  pointsIcon: {
    width: 16,
    height: 16,
  },
  importantInfoContainer: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    marginVertical: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  infoIconContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  infoIcon: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    color: '#666666',
    flex: 1,
  },
  submissionContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  chooseFileButton: {
    backgroundColor: '#9C27B0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  chooseFileText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cameraIcon: {
    width: 30,
    height: 30,
  },
  submitButton: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  supportContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    marginTop: 10,
  },
  supportText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  supportIcon: {
    width: 16,
    height: 16,
  },
});

export default TaskDetailScreen;
