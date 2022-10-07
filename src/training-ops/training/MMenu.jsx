import React from "react";

import "./Training.scss";
import settingsSVG from "../Img/setting.svg";

import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
} from "@chakra-ui/react";

function MMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal
        scrollBehavior="inside"
        size="xl"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ textAlign: "center" }}>
            Электронный тренажер для подготовки по специальности: Монтаж и
            эксплуатация охранно-пожарной сигнализации
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>
          <Tabs isFitted>
            <TabList>
              <Tab>Начать</Tab>
              <Tab> Методическое сопровождение </Tab>
              <Tab>Инструкция</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className="menu-training-tab">
                  <Menu>
                    <MenuButton className="menu-training-card">
                      Задание 1
                    </MenuButton>
                    <Portal>
                      <MenuList zIndex="10000">
                        <MenuItem>Уровень 1</MenuItem>
                        <MenuItem>Уровень 2</MenuItem>
                        <MenuItem>Уровень 3</MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                  <Menu>
                    <MenuButton className="menu-training-card">
                      Задание 2
                    </MenuButton>
                    <Portal>
                      <MenuList zIndex="10000">
                        <MenuItem>Уровень 1</MenuItem>
                        <MenuItem>Уровень 2</MenuItem>
                        <MenuItem>Уровень 3</MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                  <Menu>
                    <MenuButton className="menu-training-card">
                      Задание 3
                    </MenuButton>
                    <Portal>
                      <MenuList zIndex="10000">
                        <MenuItem>Уровень 1</MenuItem>
                        <MenuItem>Уровень 2</MenuItem>
                        <MenuItem>Уровень 3</MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                </div>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <img
        onClick={onOpen}
        src={settingsSVG}
        className="absolute menu-training__btn"
        alt=""
      />
    </>
  );
}

export default MMenu;
