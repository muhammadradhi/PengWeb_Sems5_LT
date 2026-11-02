// Mendaftarkan <ion-icon> beserta ikon yang dipakai di aplikasi.
// Ikon baru harus ditambahkan di sini supaya bisa tampil.
import { addIcons } from "ionicons";
import { defineCustomElement } from "ionicons/components/ion-icon.js";
import {
  addOutline,
  archiveOutline,
  cafeOutline,
  calendarOutline,
  cardOutline,
  checkmarkCircleOutline,
  createOutline,
  informationCircleOutline,
  locationOutline,
  personOutline,
  powerOutline,
  receiptOutline,
  removeCircleOutline,
  restaurantOutline,
  storefrontOutline,
  walletOutline,
  warningOutline,
} from "ionicons/icons";

addIcons({
  "add-outline": addOutline,
  "archive-outline": archiveOutline,
  "cafe-outline": cafeOutline,
  "calendar-outline": calendarOutline,
  "card-outline": cardOutline,
  "checkmark-circle-outline": checkmarkCircleOutline,
  "create-outline": createOutline,
  "information-circle-outline": informationCircleOutline,
  "location-outline": locationOutline,
  "person-outline": personOutline,
  "power-outline": powerOutline,
  "receipt-outline": receiptOutline,
  "remove-circle-outline": removeCircleOutline,
  "restaurant-outline": restaurantOutline,
  "storefront-outline": storefrontOutline,
  "wallet-outline": walletOutline,
  "warning-outline": warningOutline,
});

defineCustomElement();
