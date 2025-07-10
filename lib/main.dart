import 'package:flutter/material.dart';
import 'splash_screen.dart';

void main() {
  runApp(const GuessNumberApp());
}

class GuessNumberApp extends StatelessWidget {
  const GuessNumberApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '猜數字王',
      home: const SplashScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
