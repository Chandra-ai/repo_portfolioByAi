import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Chandrasekhar Moharana</h3>
          <p className="text-slate-400 mb-6">Java Developer | Building Tomorrow's Solutions Today</p>
          <div className="flex justify-center space-x-6 mb-8">
            <button className="text-slate-400 hover:text-white transition-colors duration-200">
              <Linkedin size={24} />
            </button>
            <button className="text-slate-400 hover:text-white transition-colors duration-200">
              <Github size={24} />
            </button>
            <button className="text-slate-400 hover:text-white transition-colors duration-200">
              <Twitter size={24} />
            </button>
            <button className="text-slate-400 hover:text-white transition-colors duration-200">
              <Mail size={24} />
            </button>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 Chandrasekhar Moharana. All rights reserved. | Made with ❤️ in Mumbai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
