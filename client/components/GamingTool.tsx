import React, { useState } from 'react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { ChevronDown, ChevronUp, X, Minus } from 'lucide-react';

interface AimbotSettings {
  enabled: boolean;
  key: string;
  headOffset: number;
  useBezier: boolean;
  steps: number;
  speedX: number;
  speedY: number;
}

export function GamingTool() {
  const [selectedTab, setSelectedTab] = useState('Aimbot');
  const [fps, setFps] = useState([75]);
  const [fovRange, setFovRange] = useState([45]);
  const [screenshotExpanded, setScreenshotExpanded] = useState(true);
  const [aimbotExpanded, setAimbotExpanded] = useState(true);

  const [aimbot1, setAimbot1] = useState<AimbotSettings>({
    enabled: true,
    key: '[VK_06]',
    headOffset: 0.20,
    useBezier: true,
    steps: 5,
    speedX: 5,
    speedY: 0.53
  });

  const [aimbot2, setAimbot2] = useState<AimbotSettings>({
    enabled: false,
    key: '[VK_01]',
    headOffset: 0.35,
    useBezier: true,
    steps: 10,
    speedX: 10,
    speedY: 1.10
  });

  const [aimbot3, setAimbot3] = useState<AimbotSettings>({
    enabled: false,
    key: '[ALT]',
    headOffset: 0.19,
    useBezier: true,
    steps: 2.00,
    speedX: 2.00,
    speedY: 2.00
  });

  const sidebarItems = [
    'Aimbot',
    'Triggerbot',
    'Hardware',
    'UI',
    'Log'
  ];

  const AimbotSection = ({ 
    title, 
    settings, 
    onSettingsChange, 
    keyColor = 'text-gaming-green' 
  }: { 
    title: string;
    settings: AimbotSettings;
    onSettingsChange: (settings: AimbotSettings) => void;
    keyColor?: string;
  }) => (
    <div className="space-y-3">
      <div className="text-white font-medium">{title}:</div>
      
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="flex items-center space-x-2">
          <Switch 
            checked={settings.enabled}
            onCheckedChange={(enabled) => onSettingsChange({...settings, enabled})}
          />
          <span className="text-white">Enable</span>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-4">
        <span className="text-gaming-text-muted">Key</span>
        <div className="flex items-center space-x-2">
          <span className={`${keyColor} font-mono text-sm`}>{settings.key}</span>
          <Button size="sm" className="bg-gaming-blue hover:bg-gaming-blue-light">
            Set Key
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-4">
        <span className="text-gaming-text-muted">Head Offset</span>
        <span className="text-white text-right">{settings.headOffset.toFixed(2)}</span>
      </div>

      <div className="grid grid-cols-2 items-center gap-4">
        <div className="flex items-center space-x-2">
          <Switch 
            checked={settings.useBezier}
            onCheckedChange={(useBezier) => onSettingsChange({...settings, useBezier})}
          />
          <span className="text-white">Use Bezier</span>
        </div>
        <span className="text-white text-right">{settings.headOffset.toFixed(2)}</span>
      </div>

      <div className="grid grid-cols-2 items-center gap-4">
        <span className="text-gaming-text-muted">Steps</span>
        <div className="flex-1">
          <Slider
            value={[settings.steps]}
            onValueChange={([steps]) => onSettingsChange({...settings, steps})}
            max={20}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="text-white text-center text-sm mt-1">{settings.steps}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-4">
        <span className="text-gaming-text-muted">Speed X</span>
        <div className="flex-1">
          <Slider
            value={[settings.speedX]}
            onValueChange={([speedX]) => onSettingsChange({...settings, speedX})}
            max={20}
            min={0}
            step={0.1}
            className="w-full"
          />
          <div className="text-white text-center text-sm mt-1">{settings.speedX.toFixed(1)}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-4">
        <span className="text-gaming-text-muted">Speed Y</span>
        <div className="flex-1">
          <Slider
            value={[settings.speedY]}
            onValueChange={([speedY]) => onSettingsChange({...settings, speedY})}
            max={5}
            min={0}
            step={0.01}
            className="w-full"
          />
          <div className="text-white text-center text-sm mt-1">{settings.speedY.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gaming-dark flex">
      {/* Sidebar */}
      <div className="w-48 bg-gaming-darker border-r border-gaming-blue/20">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gaming-blue mb-6">CZN COLORBOT</h2>
          
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item}
                onClick={() => setSelectedTab(item)}
                className={`w-full text-left px-4 py-3 rounded transition-colors ${
                  selectedTab === item
                    ? 'bg-gaming-blue text-white'
                    : 'text-gaming-text-muted hover:bg-gaming-blue/20 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gaming-dark mb-44">
        {/* Game Info Bar */}
        <div className="bg-gaming-darker border-b border-gaming-blue/20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="text-gaming-text-muted">
                FPS: <span className="text-gaming-green font-bold">71.9</span>
              </div>
              <div className="text-gaming-text-muted">
                Hardware: <span className="text-gaming-green">Makcu</span>
              </div>
            </div>
            <div className="text-gaming-blue font-semibold">CZN<br /></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-6">
          {selectedTab === 'Aimbot' && (
            <>
              {/* Screenshot Settings */}
              <Card className="bg-gaming-darker border-gaming-blue/20">
                <div className="p-4">
                  <button
                    onClick={() => setScreenshotExpanded(!screenshotExpanded)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <div className="flex items-center space-x-2">
                      {screenshotExpanded ? (
                        <ChevronDown className="h-4 w-4 text-gaming-blue" />
                      ) : (
                        <ChevronUp className="h-4 w-4 text-gaming-blue" />
                      )}
                      <span className="text-white font-medium">Screenshot Settings</span>
                    </div>
                  </button>
                  
                  {screenshotExpanded && (
                    <div className="mt-4 space-y-4">
                      <div className="grid grid-cols-2 items-center gap-4">
                        <span className="text-gaming-text-muted">FPS</span>
                        <div className="flex-1">
                          <Slider
                            value={fps}
                            onValueChange={setFps}
                            max={144}
                            min={30}
                            step={1}
                            className="w-full"
                          />
                          <div className="text-white text-center text-sm mt-1">{fps[0]} FPS</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 items-center gap-4">
                        <span className="text-gaming-text-muted">FOV Range</span>
                        <div className="flex-1">
                          <Slider
                            value={fovRange}
                            onValueChange={setFovRange}
                            max={120}
                            min={30}
                            step={1}
                            className="w-full"
                          />
                          <div className="text-white text-center text-sm mt-1">{fovRange[0]}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              {/* Aimbot Hotkeys & Speeds */}
              <Card className="bg-gaming-darker border-gaming-blue/20">
                <div className="p-4">
                  <button
                    onClick={() => setAimbotExpanded(!aimbotExpanded)}
                    className="flex items-center justify-between w-full text-left mb-4"
                  >
                    <div className="flex items-center space-x-2">
                      {aimbotExpanded ? (
                        <ChevronDown className="h-4 w-4 text-gaming-blue" />
                      ) : (
                        <ChevronUp className="h-4 w-4 text-gaming-blue" />
                      )}
                      <span className="text-white font-medium">Aimbot Hotkeys & Speeds</span>
                    </div>
                  </button>
                  
                  {aimbotExpanded && (
                    <div className="space-y-6">
                      <AimbotSection
                        title="Aimbot 1"
                        settings={aimbot1}
                        onSettingsChange={setAimbot1}
                        keyColor="text-gaming-green"
                      />
                    </div>
                  )}
                </div>
              </Card>
            </>
          )}

          {selectedTab !== 'Aimbot' && (
            <Card className="bg-gaming-darker border-gaming-blue/20">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{selectedTab} Settings</h3>
                <p className="text-gaming-text-muted">Configuration options for {selectedTab} will be displayed here.</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
